let database = 
{
    "404" :
    {
        "title" : "404 Page doesn't exist",
        "description" : `Hey, there's nothing here. Try <a href="#home">this</a>?`
    },

    "home" :
    {
        "projects" :
        [
            {
                "name" : "Cinematic Skies: Golden Hour",
                "thumbnail" : "CS_01_th.jpg",
                "url" : "cinematic-skies-01"
            },
            {
                "name" : "Reveal Shader",
                "thumbnail" : "reveal_shader_th.jpg",
                "url" : "reveal-shader",
                "flag" : "github"
            },
            {
                "name" : "Audio Visualization Framework",
                "thumbnail" : "audio_viz_th.jpg",
                "url" : "audioviz-framework",
                "flag" : "github"
            }
        ]
    },

    "about":
    {
        "title" : "Runningtap",
        "sidebar" : "About",
        "description" : `Runningtap is a side gig run by <a href="https://nomand.co">nomand</a>, a tech artist based in New Zealand, making games, software, hardware and flying robots.`
    },

    "cinematic-skies-01" :
    {
        "header" : "sky.jpg",
        "title" : "Cinematic Sky HRDI pack.",
        "sidebar" : "Buy:",
        "links" : [ 
            {
                "store":"Unity Asset Store",
                "url" : "https://assetstore.unity.com"
            },
            {
                "store":"Gumroad",
                "url" : "https://gumroad.com/"
            }
        ],
        "description" : "A set of 10 HDR 8k 32bit full spherical HDRI images."
    },
    "reveal-shader" :
    {
        "header" : "reveal_shader.jpg",
        "title" : "Reveal Shader",
        "sidebar" : "Download:",
        "links" : [ 
            {
                "store":"Github",
                "url" : "https://github.com/nomand/revealshader"
            }
        ],
        "description" : "A set of 10 HDR 8k 32bit full spherical HDRI images."
    },
    "audioviz-framework" :
    {
        "header" : "",
        "title" : "Audio Visualization Framework",
        "sidebar" : "Download:",
        "links" : [ 
            {
                "store":"Github",
                "url" : "https://github.com/nomand/revealshader"
            }
        ],
        "description" : "A set of Unity scripts that"
    }
};