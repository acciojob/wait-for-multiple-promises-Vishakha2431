let res = document.getElementById("output");

document.addEventListener("DOMContentLoaded", () => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="2" style="text-align:center;">Loading...</td>`;
    res.appendChild(tr);

    function createPromise() {
        let time = Math.random();

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(time);
            }, time * 1000);
        });
    }

    Promise.all([createPromise(), createPromise(), createPromise()])
    .then((values) => {
        res.innerHTML = "";

        values.forEach((time, index) => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td>Promise ${index + 1}</td>
                <td>${time.toFixed(3)}</td>
            `;
            res.appendChild(tr);
        });

        let total = Math.max(...values);

        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>Total</td>
            <td>${total.toFixed(3)}</td>
        `;
        res.appendChild(tr);
    });
});