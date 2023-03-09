//Wrap the promise to react suspense to handler
export default (promise) => {
    let status = 'pending'; // status control variable
    let result;


    // the suspender will hold the promise while data still is fetching

    const suspender = promise.then((res) => {
        status = 'success';
        result = res;
    },
        (err) => {
            status = 'error';
            result = err;
        })
        console.log('wraping');

    return {
        /// when read is executable it will throw something based in status, if data still not fetched yet, 
        //will throw a promise so react suspender can hanlder
        read: () => {
            console.log('reading '+status);
            switch (status) {
                case 'pending': throw suspender;
                case 'error': throw result;
                default: return result;
            }
        }
    }
}