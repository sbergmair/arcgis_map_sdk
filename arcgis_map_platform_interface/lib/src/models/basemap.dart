enum BaseMap {
  arcgisImagery,
  arcgisImageryStandard,
  arcgisImageryLabels,
  arcgisLightGray,
  arcgisDarkGray,
  arcgisNavigation,
  arcgisNavigationNight,
  arcgisStreets,
  arcgisStreetsNight,
  arcgisStreetsRelief,
  arcgisTopographic,
  arcgisOceans,
  osmStandard,
  osmStandardRelief,
  osmStreets,
  osmStreetsRelief,
  osmLightGray,
  osmDarkGray,
  arcgisTerrain,
  arcgisCommunity,
  arcgisChartedTerritory,
  arcgisColoredPencil,
  arcgisNova,
  arcgisModernAntique,
  arcgisMidcentury,
  arcgisNewspaper,
  arcgisHillshadeLight,
  arcgisHillshadeDark,
  nationalGepgraphic,
  streetsNavigationVector,
  darkGrayVector,
  grayVector,
  topo,
  gray,
  darkGray,
  terrain,
  hybrid,
  streets,
  oceans,
  osm,
  satellite,
  topoVector,
  streetsNightVector,
  streetsVector,
  streetsReliefVector,
}

extension BaseMapExt on BaseMap {
  static const Map<BaseMap, String> values = {
    BaseMap.arcgisImagery: 'arcgis-imagery',
    BaseMap.arcgisImageryStandard: 'arcgis-imagery-standard',
    BaseMap.arcgisImageryLabels: 'arcgis-imagery-labels',
    BaseMap.arcgisLightGray: 'arcgis-light-gray',
    BaseMap.arcgisDarkGray: 'arcgis-dark-gray',
    BaseMap.arcgisNavigation: 'arcgis-navigation',
    BaseMap.arcgisNavigationNight: 'arcgis-navigation-night',
    BaseMap.arcgisStreets: 'arcgis-streets',
    BaseMap.arcgisStreetsNight: 'arcgis-streets-night',
    BaseMap.arcgisStreetsRelief: 'arcgis-streets-relief',
    BaseMap.arcgisTopographic: 'arcgis-topographic',
    BaseMap.arcgisOceans: 'arcgis-oceans',
    BaseMap.osmStandard: 'osm-standard',
    BaseMap.osmStandardRelief: 'osm-standard-relief',
    BaseMap.osmStreets: 'osm-streets',
    BaseMap.osmStreetsRelief: 'osm-streets-relief',
    BaseMap.osmLightGray: 'osm-light-gray',
    BaseMap.osmDarkGray: 'osm-dark-gray',
    BaseMap.arcgisTerrain: 'arcgis-terrain',
    BaseMap.arcgisCommunity: 'arcgis-community',
    BaseMap.arcgisChartedTerritory: 'arcgis-charted-territory',
    BaseMap.arcgisColoredPencil: 'arcgis-colored-pencil',
    BaseMap.arcgisNova: 'arcgis-nova',
    BaseMap.arcgisModernAntique: 'arcgis-modern-antique',
    BaseMap.arcgisMidcentury: 'arcgis-midcentury',
    BaseMap.arcgisNewspaper: 'arcgis-newspaper',
    BaseMap.arcgisHillshadeLight: 'arcgis-hillshade-light',
    BaseMap.arcgisHillshadeDark: 'arcgis-hillshade-dark',
    BaseMap.nationalGepgraphic: 'national-geographic',
    BaseMap.streetsNavigationVector: 'streets-navigation-vector',
    BaseMap.darkGrayVector: 'dark-gray-vector',
    BaseMap.grayVector: 'gray-vector',
    BaseMap.topo: 'topo',
    BaseMap.gray: 'gray',
    BaseMap.darkGray: 'dark-gray',
    BaseMap.terrain: 'terrain',
    BaseMap.hybrid: 'hybrid',
    BaseMap.streets: 'streets',
    BaseMap.oceans: 'oceans',
    BaseMap.osm: 'osm',
    BaseMap.satellite: 'satellite',
    BaseMap.topoVector: 'topo-vector',
    BaseMap.streetsNightVector: 'streets-night-vector',
    BaseMap.streetsVector: 'streets-vector',
    BaseMap.streetsReliefVector: 'streets-relief-vector',
  };

  String get value => values[this]!;
}