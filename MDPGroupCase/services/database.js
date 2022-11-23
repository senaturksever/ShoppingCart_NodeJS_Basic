const mysql=require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'nodejs-case',
    password: 'senaturksever123.'
});

module.exports = connection.promise();
/* içerikte hata varsa if else ile yapmak yerine promise gönderiyoruz. Blok çalışması için then kısmını, olumsuz blok içinde catch kısmı kullanılıyor */