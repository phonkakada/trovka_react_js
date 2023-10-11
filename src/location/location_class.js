import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { Component } from "react";
import map_api from "./api_key";

class LocationPicker extends Component {
    constructor(props) {
        super(props)

        const { LocationAddreess, LocationLink } = props;
        this.state = {
            Lat: null,
            Lng: null,
            LocationAddreess: null,
            LocationLink: null
        }
    }

    GetLatLong = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.ReturnLatLong)
        }
    }

    ReturnLatLong = (Position) => {
        this.setState({
            Lat: Position.coords.latitude,
            Lng: Position.coords.longitude,
        })
    }

    onMapClick = (mapProps, map, clickEvent) => {

        const { latLng } = clickEvent;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState({
            Lat: lat,
            Lng: lng
        })
        this.GetFullAddress(lat, lng)
    }
    onMarkerDragEnd = (coord) => {
        const lat = coord.latLng.lat();
        const lng = coord.latLng.lng();
        this.setState({
            Lat: lat,
            Lng: lng
        })
        this.GetFullAddress(lat, lng);
    };

    GetFullAddress = (Lat, Long) => {
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${Lat},${Long}&key=${map_api}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const googleMapsLink = `https://www.google.com/maps/place/${Lat},${Long}`;
                this.setState({
                    LocationAddreess: data.results[0].formatted_address,
                    LocationLink: googleMapsLink
                })
                this.props.LocationAddreess(data.results[0].formatted_address)
                this.props.LocationLink(googleMapsLink)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    componentDidMount() {
        this.GetLatLong()
    }

    render() {
        if (this.state.Lat) {
            return (
                <>
                        <Map
                            google={this.props.google}
                            zoom={11}
                            onClick={this.onMapClick}
                            initialCenter={{
                                lat: this.state.Lat,
                                lng: this.state.Lng,
                            }}
                        >
                            <Marker
                                position={{
                                    lat: this.state.Lat,
                                    lng: this.state.Lng
                                }}
                                draggable={true}
                                onDragend={(mapProps, map, coord) => this.onMarkerDragEnd(coord)}
                            />
                        </Map>
                </>
            )
        }
    }
}

export default GoogleApiWrapper(
    {
        apiKey: map_api
    }
)(LocationPicker)