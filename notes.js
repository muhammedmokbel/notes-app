const fs = require('fs'); 
const chalk = require('chalk')


// list command function 
const getNotes = function()
{
    const notes = loadData() ; 

    for (let i = 0 ; i < notes.length ; i++)
    {
        console.log(chalk.magenta("title note is : " + notes[i].title)) ; 
    }
}


// add command function 
const addNotes = function(title , body)
{
    const notes = loadData() ; 

 
    if (!repeatedTitle(notes , title))
    {
        notes.push({
            title : title , 
            body : body  
         })
        
        saveData(notes); 

        console.log(chalk.green("New Note added"))
    }
    else 
    {
    console.log(chalk.red("there's already note with title " + title + " !"));
    console.log(chalk.red("please change note title")); 
    }

    

  

}

// remove command function 
const removeNotes = function(title) 
{
   const notes = loadData() ; 
   const restnotes = notes.filter(note => note.title !== title )
     
    if (restnotes.length !== notes.length)
    {
        console.log(chalk.green("Note Deleted")) 
        saveData(restnotes);
    }
    else 
    {
        console.log(chalk.red("No Note Deleted"))
    }
    
}

// read command function 
const readNote = function(title)
{
    const notes = loadData() ; 
    const found = notes.find( note => note.title === title )
    if (!found)
    {
        console.log(chalk.red("there's no note with title " + title))
        console.log(chalk.red("please check the title of note again !")); 
    }
    else 
    {
        console.log(chalk.inverse(found.body)); 
    }
    

}


// helper functions 

// loading data function 
const loadData = function()
{

    try
    {
        const buffer = fs.readFileSync('notes.json'); 
        const dataJson = buffer.toString() ; 

        return JSON.parse(dataJson) ; 
    }
    catch (e)
    {
        return [] 
    }
   
}

const saveData = function(notes)
{
    const data = JSON.stringify(notes); 
    fs.writeFileSync('notes.json' , data); 
}

const repeatedTitle = function(notes , title)
{
    for (let i=0 ; i < notes.length ; i++)
    {
        if (notes[i].title === title)
            return true; 
    }
    return false; 
}




module.exports = {getNotes , addNotes , removeNotes , readNote }; 



