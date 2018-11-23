const args = process.argv.slice(2);
// lets try Fucking promise
function somePromise(){
  let promise = new Promise(function(resolve,reject){
    resolve();

});
    return promise;
};
function diagram(){
  const diagram = require('./diagram');
  diagram();
}
function database(){
  const database = require('./database');
  database();
}
function analisis(){
  const analisis = require('./analisis');

}
function ER(){
  console.log('Error......))');;
};
somePromise().then(database);
somePromise().then(diagram);
somePromise().then(analisis);
somePromise().catch(ER);
