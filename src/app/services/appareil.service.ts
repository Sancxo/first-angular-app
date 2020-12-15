export class AppareilService {
    appareils = [
        {name: 'Machine à laver',
        status: 'éteint-e'},
        {name: 'Frigo',
        status: 'allumé-e'},
        {name: 'Ordinateur',
        status: 'éteint-e'}
    ];

    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'allumé-e';
        }
    };

    switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'éteint-e';
        }
    };

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé-e';
    };

    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint-e';
    };
}