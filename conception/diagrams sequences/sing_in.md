```
@startuml

actor       Visitor       as V
participant Interface as I
participant API as A
database    Database    as DB

V -> I : visitor complete the input's form
I-> A : send json datas with POST request to the API
activate A

A -> A : control datas and security

A --[#red]> I : if error, return message with statut code
deactivate A 
I --> V : display error message
A -> DB : if all correct, execute SQL request with datas
activate DB

DB --[#red]> A : if error, return statut code 
deactivate DB
A --[#red]> I : return message with statut code of error
I --> V : display error message

DB --[#green]> A : return json datas
A --[#green]> I : return statut code 201 and identifiant without password : the operation is ok

I --> V : redirection to login page and complete identifiant

@enduml
```