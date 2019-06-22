let header = `
    <div id="header">
        <a id="logo" href="#home"></a>
        {{#if header}}
        <div id="photo" class="cover" style="background-image: url('images/{{header}}');"></div>
        {{/if}}
        <div id="menu">
            <a href="https://twitter.com/runningtap" class="item"><h3>Contact</h3></a>
            <a href="#about" class="item"><h3>About</h3></a>
            <form class="item" action="https://tinyletter.com/runningtap" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/runningtap', 'popupwindow', 'scrollbars=yes, width=800, height=600'); return true">
                <input type="email" value="" name="EMAIL" class="email" placeholder="newsletter!" required="">
                <input type="submit" value="Subscribe" name="subscribe" class="button">
            </form>
        </div>
    </div>
`

let sidebar = `
{{#if sidebar}}
<div id="sidebar">
    <h3>{{sidebar}}</h3>
    {{#if links}}
        {{#each links}}
            <a href="{{url}}" class="storebutton round" target="_blank">{{store}}</a>
        {{/each}}
    {{/if}}
</div>{{/if}}
`

let content = `
<div class="desc">
    <div id="presentation">
        {{#if title}}<p><h3>{{title}}</h3></p>{{/if}}
        {{#if description}}<p>{{{description}}}</p>{{/if}}
        {{#if projects}}<div id="projects">
            {{#each projects}}
            <a class="card thumbnail cover" style="background-image: url('images/{{thumbnail}}')" href="#{{url}}">
                {{#if flag}}<div class="flag {{flag}}"></div>{{/if}}
                <div class="title">{{name}}</div>
            </a>
            {{/each}}
        </div>{{/if}}
    </div>
</div>
`

let footer = `
<div id="footer">
    <div id="footerwrap">
        <a class="icon twitter" href="http://twitter.com/runningtap" target="_blank"></a>
        <a class="icon github" href="http://github.com/nomand" target="_blank"></a>
        <a class="icon unity" href="" target="_blank"></a>
        <div class="credit">runningtap ltd. © </div>
    </div>
</div>
`