export class NavigationModel {
    public navigation: any[];
    constructor() {
      this.navigation = [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'bi bi-grid-fill',
          url: '/backoffice/dashboard'
        },
        {
          id: 'masterData',
          title: 'Master Data',
          type: 'group',
          icon: 'flaticon-381-networking',
          url: '/backoffice/master-data',
          show: false,
          children: [
            {
              id: 'acara',
              title: 'Acara',
              type: 'item',
              icon: 'bi bi-grid-fill',
              url: '/acara'
            },
            {
              id: 'acara',
              title: 'Acara',
              type: 'item',
              icon: 'bi bi-grid-fill',
              url: '/acara'
            },
          ]
        },
      ];
    }
}
