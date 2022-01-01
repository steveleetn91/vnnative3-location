# Pieces of Vn Native Framework 3

# How to install ? 
Very easy, first you need 
    `npm install vnnative3-location`

# How to use ?

    `import Vnnative3Location from 'vnnative3-location/dist/index';`

# Query string 

Vn Native Framework hasn't dynamic url, so we use query string. Exam url : `/home/next?user_id=1` . To get user_id value only use `( new Vnnative3Location).query.get('user_id') ` in anywhere.

# Redirect go

To use redirect go only `  ( new Vnnative3Location).redirect.go('/home/next',[ { key :"user_id",value: String(1) } ])`

# Redirect back 

To use redirect go only `  ( new Vnnative3Location).redirect.back() } ])`

# Licence 
Licence : MIT
