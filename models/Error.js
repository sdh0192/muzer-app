const Error =  function(name, message)
{
        this.error = true;
        this.name = name;
        this.message = message;
};

module.exports = Error;