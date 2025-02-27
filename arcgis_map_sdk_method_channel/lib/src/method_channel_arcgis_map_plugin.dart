import 'package:arcgis_map_sdk_method_channel/src/model_extension.dart';
import 'package:arcgis_map_sdk_platform_interface/arcgis_map_sdk_platform_interface.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

class MethodChannelArcgisMapPlugin extends ArcgisMapPlatform {
  static const viewType = '<native_map_view>';

  Stream<double>? _zoomEventStream;
  Stream<LatLng>? _centerPositionEventStream;

  MethodChannel _methodChannelBuilder(int viewId) =>
      MethodChannel("dev.fluttercommunity.arcgis_map_sdk/$viewId");

  /// This method is called when the plugin is first initialized.
  @override
  Future<void> init(int mapId) async {}

  @override
  Future<FeatureLayer> addFeatureLayer(
    FeatureLayerOptions options,
    List<Graphic>? data,
    void Function(dynamic)? onPressed,
    String? url,
    int mapId,
    void Function(double)? getZoom,
    String layerId,
  ) async {
    throw UnimplementedError('addFeatureLayer() has not been implemented.');
  }

  @override
  void setMouseCursor(SystemMouseCursor cursor, int mapId) {
    throw UnimplementedError('setMouseCursor() has not been implemented');
  }

  @override
  void updateGraphicSymbol({
    required int mapId,
    required String layerId,
    required String graphicId,
    required Symbol symbol,
  }) {
    throw UnimplementedError('updateGraphicSymbol() has not been implemented');
  }

  @override
  Stream<LatLng> centerPosition(int mapId) {
    _centerPositionEventStream ??= EventChannel(
      "dev.fluttercommunity.arcgis_map_sdk/$mapId/centerPosition",
    ).receiveBroadcastStream().cast<Map<dynamic, dynamic>>().map(
          (data) => LatLng(
            (data['latitude'] as num).toDouble(),
            (data['longitude'] as num).toDouble(),
          ),
        );
    return _centerPositionEventStream!;
  }

  @override
  Stream<List<String>> visibleGraphics(int mapId) {
    throw UnimplementedError('visibleGraphics() has not been implemented.');
  }

  @override
  Stream<BoundingBox> getBounds(int mapId) {
    throw UnimplementedError('getBounds() has not been implemented.');
  }

  @override
  Stream<String> attributionText(int mapId) {
    throw UnimplementedError('attributionText() has not been implemented.');
  }

  @override
  Stream<Attributes?> onClickListener(int mapId) {
    throw UnimplementedError('onClickListener() has not been implemented.');
  }

  @override
  Future<void> updateFeatureLayer({
    required int mapId,
    required String featureLayerId,
    required List<Graphic> data,
  }) async {
    throw UnimplementedError('addFeatureLayer() has not been implemented.');
  }

  @override
  bool destroyLayer({required int mapId, required String layerId}) {
    throw UnimplementedError('destroyFeatureLayer() has not been implemented.');
  }

  @override
  bool polygonContainsPoint({
    required String polygonId,
    required LatLng pointCoordinates,
    required int mapId,
  }) {
    throw UnimplementedError(
      'polygonContainsPoint() has not been implemented.',
    );
  }

  @override
  Future<void> setInteraction(int mapId, {required bool isEnabled}) {
    return _methodChannelBuilder(mapId)
        .invokeMethod("set_interaction", {"enabled": isEnabled});
  }

  @override
  void dispose({required int mapId}) {}

  @override
  Widget buildView({
    required int creationId,
    required PlatformViewCreatedCallback onPlatformViewCreated,
    required ArcgisMapOptions mapOptions,
  });

  @override
  Future<bool> moveCamera({
    required LatLng point,
    required int mapId,
    double? zoomLevel,
    AnimationOptions? animationOptions,
    int? threeDHeading,
    int? threeDTilt,
  }) async {
    return _methodChannelBuilder(mapId).invokeMethod<bool>(
      "move_camera",
      {
        "point": point.toMap(),
        "zoomLevel": zoomLevel?.round(),
        "animationOptions": animationOptions?.toMap(),
      },
    ).then((value) => value!);
  }

  @override
  Future<bool> zoomIn({
    required int lodFactor,
    required int mapId,
    AnimationOptions? animationOptions,
  }) async {
    return _methodChannelBuilder(mapId).invokeMethod<bool>(
      "zoom_in",
      {"lodFactor": lodFactor},
    ).then((value) => value!);
  }

  @override
  Future<bool> zoomOut({
    required int lodFactor,
    required int mapId,
    AnimationOptions? animationOptions,
  }) async {
    return _methodChannelBuilder(mapId).invokeMethod<bool>(
      "zoom_out",
      {"lodFactor": lodFactor},
    ).then((value) => value!);
  }

  @override
  Stream<double> getZoom(int mapId) {
    _zoomEventStream ??=
        EventChannel("dev.fluttercommunity.arcgis_map_sdk/$mapId/zoom")
            .receiveBroadcastStream()
            .cast<int>()
            .map((event) => event.toDouble());
    return _zoomEventStream!;
  }

  @override
  Future<void> addGraphic(int mapId, String layerId, Graphic graphic) {
    // layers are not implemented for native
    return _methodChannelBuilder(mapId).invokeMethod(
      "add_graphic",
      graphic.toJson(),
    );
  }

  @override
  Future<void> removeGraphic(int mapId, String layerId, String graphicId) {
    // layers are not implemented for native
    return _methodChannelBuilder(mapId)
        .invokeMethod("remove_graphic", graphicId);
  }

  @override
  void addViewPadding(int mapId, ViewPadding padding) {
    _methodChannelBuilder(mapId)
        .invokeMethod<void>("add_view_padding", padding.toMap());
  }

  @override
  Future<void> toggleBaseMap(int mapId, BaseMap baseMap) {
    return _methodChannelBuilder(mapId)
        .invokeMethod("toggle_base_map", baseMap.name);
  }

  @override
  List<Graphic> getGraphicsInView(int mapId) {
    throw UnimplementedError('getGraphicsInView() has not been implemented.');
  }

  @override
  List<String> getVisibleGraphicIds(int mapId) {
    throw UnimplementedError(
      'getVisibleGraphicIds() has not been implemented.',
    );
  }
}
