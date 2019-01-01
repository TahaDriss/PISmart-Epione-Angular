export class Helpers {

    static setLoading(state: boolean) {
        document.getElementById('top-loader').style.display = state ? 'flex' : 'none';
    }
}
