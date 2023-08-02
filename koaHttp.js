const Koa = require('koa');
const app = new Koa();


// response
app.use(ctx => {

    console.log(ctx.url);

    if(ctx.url === '/')
        ctx.body = '<h1>IWELCOME TO INDEX PAGE</h1>';

    else if(ctx.url === '/about')
        ctx.body = '<h1>WELCOME TO ABOUT PAGE</h1>';

    else if(ctx.url === '/contact')
        ctx.body = '<h1>WELCOME TO CONTACT PAGE</h1>';
    
    
});

 
const port = 3000;
app.listen(port, () => {
    console.log(`sunucu ${port} da baslatiildi`);
});