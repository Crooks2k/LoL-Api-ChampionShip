const mongoose=require("mongoose"); //import mongoose

//create body model / collection

const ExampleSchema=new mongoose.Schema({
  champion:String,
  release_date: String,
  img: String,
  origen: String,
  resource: String,
  position: [{
    icon: String,
    role: String,
    roleP: String
  }],
  habilities: [
    {
      pasive: [{
        icon: String,
        title: String,
        description: String
      }],
      q: [{
        icon: String,
        title: String,
        description: String
      }],
      w: [{
        icon: String,
        title: String,
        description: String
      }],
      e: [{
        icon: String,
        title: String,
        description: String
      }],
      r: [{
        icon: String,
        title: String,
        description: String
      }]
    }
  ]
},
{
  versionKey: false,
  timestamps: true
});

//export mongose collection to use in routes
module.exports=mongoose.model("Champions",ExampleSchema);
