```
@startuml

actor       User       as U
participant Interface as I
participant API as A
database    Database    as DB

U -> I : user complete the input's form
I-> A : send json datas and token to security with POST request to the API
activate A

A -> A : control datas, security and token

A --[#red]> I : if error, return message with statut code
deactivate A 


I --> U : display error message
note left
if token expired, redirect to login page
end note
A -> DB : if all correct, execute SQL request with datas
activate DB

DB --[#red]> A : if error, return statut code 
deactivate DB
A --[#red]> I : return message with statut code of error
I --> U : display error message

DB --[#green]> A : return json datas


A --[#green]> I : return statut code 201 and new datas: the operation is ok

I --> U : display the tasks with new task

@enduml