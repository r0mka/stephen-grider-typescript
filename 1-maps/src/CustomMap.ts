import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }
  addUserMarker(user: User): void {
    new google.maps.Marker({
      position: { lat: user.location.lat, lng: user.location.lng },
      map: this.googleMap,
    });
  }
  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
      map: this.googleMap,
    });
  }
}

// new google.maps.Marker({position: {lat: -34, lng: 151}, map: map});
