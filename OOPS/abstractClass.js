function emp(name)
{
    let id = 101;
    this.name = name;

    function setId()
    {
        this.id = id+1;
    }
    this.print = function()
    {
        this.setId()
        console.log(this.id,",",this.name)
    }
}

yash = new emp("Yash")
yash.print()


