class Session {

    add(name, value) {
        sessionStorage.setItem(name, value);
    }    

    remove(name) {
        sessionStorage.removeItem(name);
    }

    get(name) {
        return sessionStorage.getItem(name);
    }

}