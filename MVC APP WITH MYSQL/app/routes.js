var controller = require('./models/contactController');
module.exports = function(app) {
        
            app.get('/contactList',controller.findAll);
            app.post('/contactList', controller.add);
            app.get('/contactList/:id',controller.findById);
            app.delete('/contactList/:id',controller.delete);
            app.put('/contactList/:id',controller.update);
            app.get('*',controller.sendHtml);
  };

