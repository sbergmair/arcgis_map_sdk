import 'dart:async';
import 'dart:html';
import 'dart:js';
import 'dart:js_util';
import 'dart:ui' as ui;

import 'package:arcgis_map_platform_interface/arcgis_map_platform_interface.dart';
import 'package:arcgis_map_web/arcgis_map_web.dart';
import 'package:arcgis_map_web/src/components/esri_map.dart';
import 'package:arcgis_map_web/src/components/map_view.dart';
import 'package:arcgis_map_web/src/feature_layer_controller.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

class ArcgisMapWebController {
  final int _mapId;
  final ArcgisMapOptions _mapOptions;

  late JsEsriMap? _map = const EsriMap().init(basemap: _mapOptions.basemap);

  late FeatureLayerController? _featureLayerController = FeatureLayerController(
    minZoom: _mapOptions.minZoom,
    maxZoom: _mapOptions.maxZoom,
  );

  late final _div = DivElement()
    ..id = _getViewType(_mapId)
    ..style.width = '100%'
    ..style.height = '100%';

  JsMapView? _view;
  HtmlElementView? _widget;
  Handle? _preventInteractionHandle;
  Handle? _pointerMoveHandle;

  String _getViewType(int mapId) => 'plugins.flutter.io/arcgis_$mapId';

  /// The Flutter widget that will contain the rendered Map. Used for caching.
  Widget? get widget {
    if (_widget == null && !_streamController.isClosed) {
      _widget = HtmlElementView(
        viewType: _getViewType(_mapId),
      );
    }
    return _widget;
  }

  /// The StreamController used by this controller and the geometry ones.
  final StreamController<MapEvent> _streamController;

  /// The Stream over which this controller broadcasts events.
  Stream<MapEvent> get events => _streamController.stream;

  ArcgisMapWebController({
    required int mapId,
    //TODO: Implement Stream Controller
    required StreamController<MapEvent> streamController,
    required ArcgisMapOptions mapOptions,
  })  : _mapId = mapId,
        _streamController = streamController,
        _mapOptions = mapOptions {
    ui.platformViewRegistry.registerViewFactory(
      _getViewType(_mapId),
      (int viewId) => _div,
    );
  }

  void init() {
    _createMap();
  }

  Future<void> _createMap() async {
    context["esri"]["core"]["config"]["apiKey"] = _mapOptions.apiKey;

    _view = MapView().init(
      container: _div,
      map: _map,
      center: <double>[_mapOptions.initialCenter.longitude, _mapOptions.initialCenter.latitude],
      zoom: _mapOptions.zoom,
      padding: _mapOptions.padding,
      rotationEnabled: _mapOptions.rotationEnabled,
      minZoom: _mapOptions.minZoom,
      maxZoom: _mapOptions.maxZoom,
      xMin: _mapOptions.xMin,
      xMax: _mapOptions.xMax,
      yMin: _mapOptions.yMin,
      yMax: _mapOptions.yMax,
    );

    // If "hideDefaultZoomButtons" is true, do not show the default zoom buttons.
    // If "hideAttribution" is true, the attribution is not shown.
    final _hideDefaultZoomButtons = _mapOptions.hideDefaultZoomButtons;
    final _hideAttribution = _mapOptions.hideAttribution;
    if (_hideDefaultZoomButtons == true && _hideAttribution == true) {
      _view!.ui.components = [];
    } else if (_hideDefaultZoomButtons == true && _hideAttribution == false) {
      _view!.ui.components = ["attribution"];
    } else if (_hideDefaultZoomButtons == false && _hideAttribution == true) {
      _view!.ui.components = ["zoom"];
    }

    if (!_mapOptions.isInteractive) {
      _preventInteractionHandle = _featureLayerController!.preventInteraction(_view!);
    }
    _pointerMoveHandle = _featureLayerController!.registerGlobalPointerMoveEventHandler(_view!);
  }

  void dispose() {
    _preventInteractionHandle?.remove();
    _pointerMoveHandle?.remove();
    _widget = null;
    _map = null;
    _view = null;
    _featureLayerController = null;
    _streamController.close();
  }

  Future<FeatureLayer> addFeatureLayer(
    FeatureLayerOptions options,
    List<Graphic>? data,
    void Function(dynamic)? onPressed,
    String? url,
    void Function(double)? getZoom,
    String layerId,
  ) async {
    if (context["FeatureLayer"] == null) {
      await promiseToFuture(loadFeatureLayer());
    }
    return _featureLayerController!.createLayer(options, data, onPressed, url, getZoom, layerId, _map!, _view!);
  }

  void onClick(void Function(ArcGisMapAttributes?) onPressed) {
    _featureLayerController!.onClick(_view!, onPressed);
  }

  void setMouseCursor(SystemMouseCursor cursor) {
    return _featureLayerController!.setMouseCursor(_getViewType(_mapId), cursor);
  }

  void updateGraphicSymbol(Symbol symbol, String polygonId) {
    return _featureLayerController!.updateGraphicSymbol(view: _view!, symbol: symbol, polygonId: polygonId);
  }

  Stream<double> getZoom() {
    return _featureLayerController!.getZoom(_view!);
  }

  Stream<LatLng> centerPosition() {
    return _featureLayerController!.centerPosition(_view!);
  }

  Stream<BoundingBox> getBounds() {
    return _featureLayerController!.getBounds(_view!);
  }

  Stream<List<String>> visibleGraphics() {
    return _featureLayerController!.visibleGraphics(_view!);
  }

  List<String> getVisibleGraphicIds() {
    return _featureLayerController!.getVisibleGraphicIds(_view!);
  }

  Stream<String> attributionText() {
    return _featureLayerController!.attributionText(_view!);
  }

  Future<void> updateFeatureLayer(List<Graphic> data) async {
    await _featureLayerController!.updateLayer(data);
  }

  bool destroyLayer(String layerId) {
    return _featureLayerController!.destroyLayer(layerId);
  }

  bool graphicContainsPoint(String polygonId, LatLng pointCoordinates) {
    return _featureLayerController!
        .graphicContainsPoint(view: _view!, polygonId: polygonId, pointCoordinates: pointCoordinates);
  }

  Future<void> moveCamera({required LatLng point, int? zoomLevel, AnimationOptions? animationOptions}) async {
    await _featureLayerController!.moveCamera(
      point: point,
      zoomLevel: zoomLevel,
      view: _view!,
      animationOptions: animationOptions,
    );
  }

  Future<void> zoomIn(int lodFactor) async {
    await _featureLayerController!.zoomIn(lodFactor, _view!);
  }

  Future<void> zoomOut(int lodFactor) async {
    await _featureLayerController!.zoomOut(lodFactor, _view!);
  }

  void addGraphic(Graphic graphic) {
    _featureLayerController!.addGraphic(_view!, graphic);
  }

  void removeGraphic(String graphicId) {
    _featureLayerController!.removeGraphic(_view!, graphicId);
  }

  void addViewPadding({required ViewPadding padding}) {
    _featureLayerController!.addViewPadding(view: _view!, padding: padding);
  }

  void toggleBaseMap({required BaseMap baseMap}) {
    _featureLayerController!.toggleBaseMap(view: _view!, baseMap: baseMap);
  }

  List<Graphic> get graphicsInView => _featureLayerController!.graphicsInView;
}