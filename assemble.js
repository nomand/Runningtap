function Main()
{
    this.reset = () => document.getElementById("view").innerHTML = "";

    this.route = function()
    {
        if(window.document.location.hash === "")
            window.document.location.hash = "#home"
        else
            this.load(window.document.location.hash);
    }

    this.load = function(target)
    {
        this.reset();
        target = target.substr(0,1) == "#" ? target.substr(1, target.length-1) : target;
        target = target.replace(/\+/g, " ").trim();

        document.title = `Runningtap: ${target}`;
        this.assemble(target);
    }

    this.assemble = function(target)
    {   
        let context = !!database[target] ? database[target] : database["404"];

        let parseHeader = Handlebars.compile(header);
        let parseFooter = Handlebars.compile(footer);
        let parseSidebar = Handlebars.compile(sidebar);
        let parseContent = Handlebars.compile(content);

        document.getElementById("view").innerHTML += parseHeader(context) + `<div id="content" class="fadeIn">` + parseSidebar(context) + parseContent(context) + `</div>` + parseFooter(context);
    }
}

function on_scroll()
{
  let menu = document.getElementById("menu");
  
  if(document.getElementById("photo") != null)
  {
    if(window.scrollY > document.getElementById("photo").offsetHeight - 150){
      if(!menu.classList.contains("sticky")) menu.classList.add("sticky"); }
    else {
      if(menu.classList.contains("sticky")) menu.classList.remove("sticky"); }
  }
}

window.addEventListener("hashchange", () => main.load(window.document.location.hash));
window.addEventListener("scroll", on_scroll);