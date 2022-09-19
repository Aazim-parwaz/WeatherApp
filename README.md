# NOTES-APP USING CLI : A NODEJS APPLICATION

## Table of Contents

1. [Introduction](#Introduction)
2. [MODULES_USED](#MODULES_USED)
3. [NODEJS_FILE-SYSTEMS_MODULE](#NODEJS_FILE-SYSTEMS_MODULE)
4. [CHALK_MODULE](#CHALK_MODULE)
5. [YARGS_MODULE](#YARGS_MODULE)

## introduction

<a name="introduction"></a>

NOTE-APP is the nodejs application developed by Aazim Parwaz. The App uses command line interface to perform I/O operations. Yargs module customizes/creates the commands in CLI where read,write,delete,update, and find commands are created to perform the operations. The Input taken from command line is store in _yargs.argv()_ in the form of an object. The object is parsed to get the input queries with the data like _title_ and _note_. Then information is stored in .json file using _FILE SYSTEMS MODULE(fs)_. Queries like reading reads the .json file using _fs_ and logs the information in the console. To make data look pleasent to eyes _CHALK MODULE_ is used. _chalk_ adds color, font,etc to the output text.
