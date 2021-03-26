Ctlg-nuxt adalah mockup sederhana untuk katalog produk dan detail produk. Ctlg-nuxt menggunakan sumber data dari gabungan faker api dan beberapa gambar dari shutterstock yang disatukan dan dijadikan database json menggunakan bantuan https://my-json-server.typicode.com/ , karena keterbatasan free plan dari json server typicode, data dummy yang digunakan hanya 10 saja. Pada detail produk sendiri terdapat bagian reviews, menggunakan dummy data dari https://jsonplaceholder.typicode.com/ 

Sesuai namanya ctlg-nuxt menggunakan Nuxt sebagai framework utama nya. Koneksi dengan API menggunakan modul axios yang terhubung dengan nuxt https://axios.nuxtjs.org/ 
Ctlg-nuxt dibuat tanpa menggunakan bantuan css framework dan framework vue komponen seperti bootstrap, material ui, dll. Untuk memudahakn pembuatan class css, saya menggunakan css pre-processor yaitu sass.

Berikut link yang dapat diakses
Source code:  https://github.com/aldinofrizal/ctlg-nuxt 
Aplikasi: http://ctlg-nuxt.herokuapp.com/ 

Note: Loading ketika membuka aplikasi nya cukup lama, karena menggunakan heroku paket free.
