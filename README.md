# Transformer Function Challenge


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```
Running the project:
```
npm start
```

## IMPORTANT
- If you want to edit the transformer function, go to the `utils/transformerFunction.js` file.
- When you hit the `POST /file` endpoint, you're uploading the file to `uploads/data.csv`


## Examples



## Usage

Upload the file:
```
POST api/v1/file
```
![Image text](https://i.postimg.cc/136sgcwW/Screen-Shot-2022-08-05-at-4-40-53-PM.png)
![Image text](https://i.postimg.cc/3NHbcmdw/Screen-Shot-2022-08-05-at-4-48-31-PM.png)

Retrieve the file in JSON format:
```
GET api/v1/file
```

## Responds

`POST api/v1/file`

```
{
    "status": true,
    "message": "File is uploaded",
    "data": {
        "name": "data.csv",
        "mimetype": "text/csv",
        "size": 21
    }
}

```

`GET api/v1/file`

```
[
    {
        "Numbers": "1"
    },
    {
        "Numbers": "2"
    },
    {
        "Numbers": "3"
    },
    {
        "Numbers": "4"
    }
]
```
