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
activate A
A -> A : generate token
A --[#green]> I : return statut code 200 and some information's user without password and the unique token with expiration : the operation is ok
deactivate A
I --> V : redirection to home page

@enduml