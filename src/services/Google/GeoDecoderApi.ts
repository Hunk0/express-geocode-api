import axios from "axios";
import config from "../../config/config";

export default class GeoDecoderApi {
    //No billing proyect? enable usesample option
    public static async getCoordinates(address: string, usesample:Boolean = false){
        const sampleresults = {
            "results" : [
                {
                    "address_components" : [
                        {
                        "long_name" : "1600",
                        "short_name" : "1600",
                        "types" : [ "street_number" ]
                        },
                        {
                        "long_name" : "Amphitheatre Pkwy",
                        "short_name" : "Amphitheatre Pkwy",
                        "types" : [ "route" ]
                        },
                        {
                        "long_name" : "Mountain View",
                        "short_name" : "Mountain View",
                        "types" : [ "locality", "political" ]
                        },
                        {
                        "long_name" : "Santa Clara County",
                        "short_name" : "Santa Clara County",
                        "types" : [ "administrative_area_level_2", "political" ]
                        },
                        {
                        "long_name" : "California",
                        "short_name" : "CA",
                        "types" : [ "administrative_area_level_1", "political" ]
                        },
                        {
                        "long_name" : "United States",
                        "short_name" : "US",
                        "types" : [ "country", "political" ]
                        },
                        {
                        "long_name" : "94043",
                        "short_name" : "94043",
                        "types" : [ "postal_code" ]
                        }
                    ],
                    "formatted_address" : "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
                    "geometry" : {
                        "location" : {
                            "lat" : 37.4224764,
                            "lng" : -122.0842499
                        },
                        "location_type" : "ROOFTOP",
                        "viewport" : {
                            "northeast" : {
                                "lat" : 37.4238253802915,
                                "lng" : -122.0829009197085
                            },
                            "southwest" : {
                                "lat" : 37.4211274197085,
                                "lng" : -122.0855988802915
                            }
                        }
                    },
                    "place_id" : "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
                    "plus_code": {
                        "compound_code": "CWC8+W5 Mountain View, California, United States",
                        "global_code": "849VCWC8+W5"
                    },
                    "types" : [ "street_address" ]
                }
            ],
            "status" : "OK"
        }

        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.GOOGLE.KEY}`);
        const { results } = (usesample)?sampleresults:res.data;
        const location = results[0]?.geometry?.location;

        return {
            longitud: location?.lat || 0.0,
            latitud: location?.lng || 0.0,
            estadogeo: (location?.lat && location?.lng)?"A":"F"
        }
    }
}