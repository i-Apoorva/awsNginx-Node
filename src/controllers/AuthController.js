var authService = require('../services/AuthService');

exports.register = function(req, res){
    let register = authService.Register(req.body, function(err, result){
    if(err){
        return res.send(err.message);
    }
    res.render('verify');
  })
}

exports.login = function(req, res){
    let login = authService.Login(req.body, function(err, result){
        if(err){
          return res.render('login', {
               errors: err
           })
        }
        req.session.authorization = result;
        req.session.save( () => {
            res.redirect('/dashboard');
        });
    })
 }

 exports.token = (req, res) => {
    if (req.session.authorization) {
        res.send(req.session.authorization);
    } else {
        authService.Login(req.body, (err, result) => {
            if (err)
                res.send(err);
            req.session.authorization = result;
            res.send(req.session.authorization);
        });
    }
};

 exports.validate_token = function(req, res){
    let validate = authService.Validate(req.body.token,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
}

exports.signout = function(req, res){
    let signout = authService.Signout(req.body, function(err, result){
        if(err){
            return res.send(err.message);
        }
        res.render('login');
      })
 }