import tree from './tree'; 
import fs from 'fs';
const addNewImages = (req, res) => {
    const base64img = fs.readFileSync(req.files[0].path, { encoding: 'base64' });
    for(var i in tree) {
        var node = tree[i];
        if(node.id == req.query.id) {
            if(!node.images){
                node.images = [];
            }
            node.images.push(base64img);
        }
    }
    res.json("Images Updated");
}

const updateItem = (req, res) => {
    const body = req.body;
    console.log(req.body);
    for(var i in tree) {
        var node = tree[i];
        if(node.id == req.query.id) {
            node.title = body.title;
            node.price = body.price;
            node.offerPrice = body.offerPrice;
            node.inventory = body.inventory;
            node.description = body.description;
        }
    }
    res.send("updated");
}

const fetchData = (req, res) => {
    console.log("count", tree[0].images.length);
    res.send(tree);
}

export const service = {
    updateItem,
    fetchData,
    addNewImages,
}