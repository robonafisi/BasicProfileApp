


/*
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { email } = req.body;
    const { company } = req.body;
    const { street } = req.body;
    const { city } = req.body;
    const { state } = req.body;
    const { zip } = req.body;
    const { phone } = req.body;
    const { birth_date } = req.body;
    const { sex } = req.body;
    const { date_entered } = req.body;
    
    const newUser = await pool.query("INSERT INTO user VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);", 
    [first_name, last_name, email, company, street, city, state, zip, phone, birth_date, sex, date_entered]);

    res.json(newUser);
    */