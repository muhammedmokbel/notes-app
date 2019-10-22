const notes = require('./notes'); 
const chalk = require('chalk')
const yargs = require('yargs'); 

// create add command 
yargs.command({
    command : "add"  , 
    desc : "Add new notes" , 
    builder: {
        title : {
            desc : "Note title" , 
            demandOption : true  , 
            type : 'string'
        } , 
        body : {
            desc : "Note body" , 
            demandOption : true , 
            type : 'string'
        }
    } , 
    handler : function(argv)
    {
       notes.addNotes(argv.title , argv.body)
    }
})


// create remove command 
yargs.command({
    command : "remove" , 
    desc : "remove notes" , 
    builder : {
        title : {
            desc : "note title" , 
            demandOption : true , 
            type : 'string'
        }
    } , 
    handler : function(argv)
    {
        notes.removeNotes(argv.title) ; 
    }
})

// create list command 

yargs.command({
    command : "list" , 
    desc : "list all notes" , 
    handler : function()
    {
        notes.getNotes() ; 
    }
})

// create read command 

yargs.command({
    command : "read" , 
    desc : "read note" , 
    builder : {
        title : {
            desc : "title note" , 
            demandOption : true , 
            type : 'string'
        }
    }, 
    handler : function(argv)
    {
        notes.readNote(argv.title)
    }
})



yargs.parse(); 



