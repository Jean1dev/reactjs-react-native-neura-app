import { firebaseDatabase } from "../utils/firabaseUtils";


export default class FirebaseService {

    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath)
            .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    static remove = (id, node) => {
        return firebaseDatabase.ref(node + '/' + id).remove();
    };
    
    static createUser = (email, password) => {
        return firebaseDatabase.createUserWithEmailAndPassword(email, password);
    };
    
    static login = (email, password) => {
        return firebaseDatabase.signInWithEmailAndPassword(email, password);
    };
    
    static logout = () => {
        return firebaseDatabase.signOut();
    };
    
    static onAuthChange = (callbackLogin, callbackLogout) => {
        firebaseDatabase.onAuthStateChanged(authUser => {
            if (!authUser) {
                callbackLogout(authUser);
            } else {
                callbackLogin(authUser);
            }
        });
    };

}