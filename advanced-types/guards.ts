type FileSource = { type: 'file'; path: string};
const fileSource: FileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DbSource = { type: 'db'; connectionUrl: string };
const dbSource: DbSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DbSource;

function isFile (source: Source) {
    return source.type === 'file';
}

function loadData(source: Source) {
    // Open + read file OR reach out to database server
    // Add type guard
    if ('path' in source) {
        // source.path => use that to open the file
        return;
    }
    // source.connectionUrl; => to reachout to database
}

function loadDataCheckType(source: Source){
    if (source.type === 'file'){
        return source.path;
    }
    return source.connectionUrl;
}

function loadDataBooleanCheck(source: Source) {
    if(isFile(source)){
        return source.path;
    }

    return source.connectionUrl;
}

class User {
    constructor (public name: string) {}

    join () {
        // ...
    }
}

class Admin {
    constructor (permissions: string []) {}

    scan() {
        // ...
    }
}

const user = new User ('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
    // .join() OR .scan() ...
    if (entity instanceof User){
        entity.join();
        return;
    }

    entity.scan();
}