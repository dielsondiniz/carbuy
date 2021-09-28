//Criaçaõ de função para carregamento dos dados do servidor

export function loadProducts() {
    function createDeferredPromise() {
        let resolve, reject, abort;

        const promise = new Promise((res, rej) => {

            resolve = res;
            reject = rej;
            abort = () => {
                rej({ isAborted: true });
            };
        });

        return { promise, resolve, reject, abort };
    }

    const { resolve, reject, promise } = createDeferredPromise();

    fetch('https://5d6da1df777f670014036125.mockapi.io/api/v1/product', { method: 'GET', headers: { 'content-type': 'application/x-www-form-urlencoded' } })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data)
                    resolve(data);
                });
            } else {
                console.log('Houve um problema ao carregar os produtos.');
                reject('Houve um problema ao carregar os produtos.');
            }

        }).catch(function (err) {
            reject(err)
        });

    return promise;
}