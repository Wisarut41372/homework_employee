exports.getEmployee = async (req, res)=>{
    res.send(`Get All Employee`);
}

exports.getEmployeeById = async(req,res)=>{
    res.send(`Get Employee By ID = ${req.params.id}`);
};

exports.getEmployeeBySal = async(req,res)=>{
    salary = req.params.salary*10/100;
    res.send(`Get Employee By Tax = ${salary}`);
};

exports.getEmployeeByAge = async(req,res)=>{
    age = 60 - req.params.age;
    res.send(`Get Employee By Retire = ${age}`);
};

exports.addEmployee = async(req,res)=>{
    salary = req.body.salary*10/100;
    age = 60 - req.body.age;
    res.send(`Add Employee ID:${req.body.id} , Name:${req.body.name} , Age:${req.body.age} , Salary:${req.body.salary}`);
};