import React from "react";
import { merge } from "lodash";
import SidebarContainer from '../sidebar/sidebar_container';

var google = window.google;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: {},
      currentLocation: null,
      gmapsLoaded: false,
    };
    this.styles = {
      default: null,
      silver: [
        {
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ color: '#616161' }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#bdbdbd' }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#eeeeee' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#757575' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#e5e5e5' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9e9e9e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#757575' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#dadada' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#616161' }]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9e9e9e' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{ color: '#e5e5e5' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{ color: '#eeeeee' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#c9c9c9' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9e9e9e' }]
        }
      ],

      night: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }]
        }
      ],

      retro: [
        { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#c9b2a6' }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#dcd2be' }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ae9e90' }]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{ color: '#dfd2ae' }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#dfd2ae' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#93817c' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{ color: '#a5b076' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#447530' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#f5f1e6' }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#fdfcf8' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#f8c967' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#e9bc62' }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{ color: '#e98d58' }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#db8555' }]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#806b63' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{ color: '#dfd2ae' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#8f7d77' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#ebe3cd' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{ color: '#dfd2ae' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#b9d3c2' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#92998d' }]
        }
      ],

      hiding: [
        {
          featureType: 'poi.business',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }]
        }
      ]
    };
  }

  initMap = () => {
    this.setState({
      gmapsLoaded: true,
    })
  }

  componentDidMount() {
    window.initMap = this.initMap
    const latitude = parseFloat(37.7749); // A/a Location
    const longitude = parseFloat(-122.4194);
    
    const mapOptions = {
      center: { lat: latitude, lng: longitude }, // this is SF
      zoom: 13,
      mapTypeControl: false
    };

    setTimeout( () => {
      this.map = new google.maps.Map(this.mapNode, mapOptions);
    }, 3000);
    // this.addLocationToMap = this.addLocationToMap.bind(this);
  }



  // createNewMarker(lat, lng, map, marker, id) {
  //   const categoryMarkers = {
  //     food: {
  //       icon: `<span class="map-icon map-icon-restaurant"></span>`,
  //       color: "#0E77E9",
  //     },
  //     misc: {
  //       icon: `<span class="map-icon map-icon-search"></span>`,
  //       color: "#000000",
  //     },
  //     hospital: {
  //       icon: `<span class="map-icon map-icon-doctor"></span>`,
  //       color: "#F45B69",
  //     },
  //   };

  //   // return new mapIcons.Marker({
  //   //   position: { lat, lng },
  //   //   map,
  //   //   icon: {
  //   //     path: mapIcons.shapes.MAP_PIN,
  //   //     fillColor: categoryMarkers[marker].color,
  //   //     fillOpacity: 1,
  //   //     strokeColor: "",
  //   //     strokeWeight: 0,
  //   //     scale: 9 / 10,
  //   //   },
  //   //   map_icon_label: categoryMarkers[marker].icon,
  //   // });
  // }

  // addLocationToMap(location) {
  //   if (location === null) return;
  //   const marker = this.createNewMarker(
  //     location.latitude,
  //     location.longitude,
  //     this.map,
  //     location.marker,
  //     location._id
  //   );

  //   marker.addListener("click", () => this.props.open(location._id));
  //   marker.addListener("mouseover", () => this.props.set(location._id));
  //   marker.addListener("mouseout", () => this.props.clear());

  //   this.setState(prevState => {
  //     const currentMarkers = prevState === null ? {} : prevState.markers;
  //     const combinedMarkers = merge({}, currentMarkers, {
  //       [location._id]: marker,
  //     });

  //     return { markers: combinedMarkers };
  //   });
  // }

  updateStyle(e) {
    this.map.setOptions({ styles: this.styles[e.currentTarget.value] });
  }


  render() {
    return (
      <div>
        <SidebarContainer />
        <select onChange={this.updateStyle.bind(this)} id="style-selector" className="selector-control">
          <option value="default">Default</option>
          <option value="silver">Silver</option>
          <option value="night">Night mode</option>
          <option value="retro" selected="selected">Retro</option>
          <option value="hiding">Hide features</option>
        </select>
        <div className="google-map" ref={map => (this.mapNode = map)} />
      </div>
    );
  }
}

export default Map;