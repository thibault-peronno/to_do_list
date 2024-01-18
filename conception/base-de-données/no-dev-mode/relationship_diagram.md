```
@startuml

' avoid problems with angled crows feet
skinparam linetype ortho

entity "Users" as U {
  *id : <<generated>> <<PK>> integer
  --
  *lastname : text
  *firstname : text
  *identifiant : text
  *password: text
  *created_at : datetime
  *updated_at : datetime
}

entity "Tasks" as T {
  *id : <<generated>> <<PK>> integer
  --
  *description : text
  *isDone : boolean
  *created_at : datetime
  *updated_at : datetime
}


U ||..o{ T

@enduml