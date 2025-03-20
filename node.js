const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Halaman Utama
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100 flex items-center justify-center min-h-screen">
            <div class="text-center bg-white p-6 rounded-lg shadow-md">
                <h1 class="text-2xl font-bold text-blue-600">Hello, World!</h1>
                <p class="mt-4"><a href="/form" class="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Go to Form</a></p>
            </div>
        </body>
        </html>
    `);
});

// Halaman Form
app.get('/form', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Input</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100 flex items-center justify-center min-h-screen">
            <div class="bg-white p-6 rounded-lg shadow-md w-80">
                <h1 class="text-2xl font-bold text-center text-blue-600">Form Input</h1>
                <form action="/submit" method="post" class="mt-4">
                    <label class="block text-gray-700">Nama:</label>
                    <input type="text" name="name" required class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300">
                    
                    <label class="block text-gray-700 mt-4">Email:</label>
                    <input type="email" name="email" required class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300">
                    
                    <button type="submit" class="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Handle Form Submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log(`Received: ${name}, ${email}`);
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Data Diterima</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100 flex items-center justify-center min-h-screen">
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <h1 class="text-2xl font-bold text-green-600">Data Diterima</h1>
                <p class="mt-2"><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <a href="/" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Kembali</a>
            </div>
        </body>
        </html>
    `);
});

// Jalankan Server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});