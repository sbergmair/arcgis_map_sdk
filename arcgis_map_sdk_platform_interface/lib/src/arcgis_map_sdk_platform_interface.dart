import 'package:arcgis_map_sdk_platform_interface/arcgis_map_sdk_platform_interface.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

class ArcgisMapPlatform extends PlatformInterface {
  ArcgisMapPlatform() : super(token: _token);

  static late ArcgisMapPlatform _instance;

  static final Object _token = Object();

  static ArcgisMapPlatform get instance => _instance;

  static set instance(ArcgisMapPlatform instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
  }

  /// This method is called when the plugin is first initialized.
  Future<void> init(int mapId) {
    throw UnimplementedError('init() has not been implemented.');
  }

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

  Future<GraphicsLayer> addGraphicsLayer(
    GraphicsLayerOptions options,
    int mapId,
    String layerId,
    void Function(dynamic)? onPressed,
  ) async {
    throw UnimplementedError('addGraphicsLayer() has not been implemented.');
  }

  Future<SceneLayer> addSceneLayer({
    required SceneLayerOptions options,
    required String layerId,
    required String url,
    required int mapId,
  }) async {
    throw UnimplementedError('addSceneLayer() has not been implemented.');
  }

  Stream<double> getZoom(int mapId) {
    throw UnimplementedError('getZoom() has not been implemented');
  }

  void switchMapStyle(int mapId, MapStyle mapStyle) {
    throw UnimplementedError('switchMapStyle() has not been implemented.');
  }

  void setMouseCursor(SystemMouseCursor cursor, int mapId) {
    throw UnimplementedError('setMouseCursor() has not been implemented');
  }

  void updateGraphicSymbol({
    required int mapId,
    required String layerId,
    required String graphicId,
    required Symbol symbol,
  }) {
    throw UnimplementedError('updateGraphicSymbol() has not been implemented');
  }

  Stream<LatLng> centerPosition(int mapId) {
    throw UnimplementedError('centerPosition() has not been implemented');
  }

  Stream<List<String>> visibleGraphics(int mapId) {
    throw UnimplementedError('visibleGraphics() has not been implemented.');
  }

  Stream<BoundingBox> getBounds(int mapId) {
    throw UnimplementedError('getBounds() has not been implemented.');
  }

  Stream<String> attributionText(int mapId) {
    throw UnimplementedError('attributionText() has not been implemented.');
  }

  Stream<Attributes?> onClickListener(int mapId) {
    throw UnimplementedError('onClickListener() has not been implemented.');
  }

  Future<void> updateFeatureLayer({
    required int mapId,
    required String featureLayerId,
    required List<Graphic> data,
  }) async {
    throw UnimplementedError('addFeatureLayer() has not been implemented.');
  }

  bool destroyLayer({required int mapId, required String layerId}) {
    throw UnimplementedError('destroyLayer() has not been implemented.');
  }

  bool polygonContainsPoint({
    required String polygonId,
    required LatLng pointCoordinates,
    required int mapId,
  }) {
    throw UnimplementedError(
      'polygonContainsPoint() has not been implemented.',
    );
  }

  void dispose({required int mapId}) {
    throw UnimplementedError('dispose() has not been implemented.');
  }

  Widget buildView({
    required int creationId,
    required PlatformViewCreatedCallback onPlatformViewCreated,
    required ArcgisMapOptions mapOptions,
  }) {
    throw UnimplementedError('buildView() has not been implemented.');
  }

  Future<void> moveCamera({
    required LatLng point,
    required int mapId,
    double? zoomLevel,
    int? threeDHeading,
    int? threeDTilt,
    AnimationOptions? animationOptions,
  }) {
    throw UnimplementedError('moveCamera() has not been implemented.');
  }

  Future<bool> zoomIn({
    required int lodFactor,
    required int mapId,
    AnimationOptions? animationOptions,
  }) {
    throw UnimplementedError('zoomIn() has not been implemented.');
  }

  Future<bool> zoomOut({
    required int lodFactor,
    required int mapId,
    AnimationOptions? animationOptions,
  }) {
    throw UnimplementedError('zoomOut() has not been implemented.');
  }

  Future<void> setInteraction(int mapId, {required bool isEnabled}) {
    throw UnimplementedError('setInteraction() has not been implemented.');
  }

  /// Adds the provided graphic to the map.
  /// You can't add a second graphic with the same id.
  Future<void> addGraphic(int mapId, String layerId, Graphic graphic) {
    throw UnimplementedError('addGraphic() has not been implemented.');
  }

  Future<void> removeGraphic(int mapId, String layerId, String graphicId) {
    throw UnimplementedError('removeGraphic() has not been implemented.');
  }

  void removeGraphics({
    required int mapId,
    String? layerId,
    String? removeByAttributeKey,
    String? removeByAttributeValue,
    String? excludeAttributeKey,
    List<String>? excludeAttributeValues,
  }) {
    throw UnimplementedError('removeGraphics() has not been implemented.');
  }

  void addViewPadding(int mapId, ViewPadding padding) {
    throw UnimplementedError('addViewPadding() has not been implemented.');
  }

  Future<void> toggleBaseMap(int mapId, BaseMap baseMap) {
    throw UnimplementedError('toggleBaseMap() has not been implemented.');
  }

  List<Graphic> getGraphicsInView(int mapId) {
    throw UnimplementedError('getGraphicsInView() has not been implemented.');
  }

  Stream<bool> isGraphicHoveredStream(int mapId) {
    throw UnimplementedError(
      'isGraphicHoveredStream() has not been implemented.',
    );
  }

  List<String> getVisibleGraphicIds(int mapId) {
    throw UnimplementedError(
      'getVisibleGraphicIds() has not been implemented.',
    );
  }
}
