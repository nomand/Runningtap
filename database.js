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
                "url" : "cinematic-skies-01",
                "flag" : "unity"
            },
            {
                "name" : "Reveal Shader",
                "url" : "reveal-shader",
                "flag" : "github"
            },
            {
                "name" : "Audio Visualization",
                "url" : "audiovis-framework",
                "flag" : "github"
            },
            {
                "name" : "Perlin Maps",
                "url" : "perlin-maps",
                "flag" : "github"
            },
            {
                "name" : "UV Projection Shader",
                "url" : "uv-projection-shader",
                "flag" : "github"
            },
            {
                "name" : "Blender to Unity",
                "url" : "blender-to-unity",
                "flag" : "github"
            }
        ],
        "title" : "Premium, free, open source and experimental gamedev resources"
    },

    "about":
    {
        "title" : "Runningtap",
        "sidebar" : "About",
        "description" :
        [
            `<p>Runningtap is a side gig run by <a href="https://nomand.co">nomand</a>, a tech artist based in New Zealand, making games, software, hardware, all things digital and analogue.</p>`,
            `<p>Support me by buying some of my premium <a href="#home">assets</a>!`
        ]
    },

    "cinematic-skies-01" :
    {
        "header" : "cinematic-skies-01.jpg",
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
        "description" : 
        [
            "<p>A set of 10 HDR full spherical HDRI images for use as skyboxes in games, architectural renders, Marmoset toolbag, Substance Designer/Painter or any other CGI lookdev application.</p>",
            "<p>Features:</p>",
            `<ul>
                <li>32 bit .EXR</li>
                <li>8k (8192 x 4096)</li>
                <li>Longitude-Latitude (Equirectangular) format</li>
            </ul>`
        ]
    },
    "reveal-shader" :
    {
        "header" : "reveal-shader.jpg",
        "title" : "Reveal Shader",
        "sidebar" : "Download:",
        "links" : [ 
            {
                "store":"Github",
                "url" : "https://github.com/nomand/revealshader"
            }
        ],
        "description" : 
            [
                "<p>A set of shaders for Unity3D that generates a render texture based on transform position and re-projects it back onto game world as a mask for various shader effects.</p>",
                "<p>Features:</p>",
                `<ul>
                    <li>Black and White to RGB texture reveal shader</li>
                    <li>Transparent to Opaque RGB Texture reveal shader</li>
                    <li>Displacement Tesselation shader</li>
                    <li>Auto and Manual world bounds lookup</li>
                    <li>Fading over time</li>
                    <li>Adaptive RenderTexture aspect ratio</li>
                    <li>Custom inspector</li>
                </ul>`
            ]
    },
    "audiovis-framework" :
    {
        "header" : "",
        "title" : "Audio Visualization Framework",
        "sidebar" : "Download:",
        "links" : [ 
            {
                "store":"Github",
                "url" : "https://github.com/nomand/UnityAudioVisualization"
            }
        ],
        "description" : 
        [
            "<p>A set of Unity scripts that read AudioSource data and exposes frequency, stereo and amplitude values to drive parameters to animate shaders, materials, or whatever else.</p>"
        ]
    },
    "perlin-maps" :
    {
        "header" : "perlin-maps.jpg",
        "title" : "Perlin Maps",
        "sidebar" : "Download:",
        "links" : [ 
            {
                "store":"Github",
                "url" : "https://github.com/nomand/PerlinMaps"
            }
        ],
        "description" : 
        [
            "<p>This project is a set of animated perlin noise textures, for shader and effects prototyping. It's not always computationally affordable to generate noise, especially the more octaves you have.</p>",
            "<p>This includes 3 sets at 1, 2 and 3 octaves. Each set is a seamless loop, 20 frames long at 3 zoom levels. These come as standalone 16bit png's.</p>"
        ]
    },
    "uv-projection-shader" :
    {
        "header" : "uv-projection-shader.jpg",
        "title" : "UV Projection Shader",
        "sidebar" : "Download:",
        "links" : [ 
            {
                "store":"Github",
                "url" : "https://github.com/nomand/UVProjectionShader"
            }
        ],
        "description" : 
        [
            "<p>This shader demonstrates a method of using worldspace transforms (relative positions, scale and rotation) to remap texture UV's in XZ world axis. The technique can be used to create variety of shader effects.</p>",
            "<p>Example supplied uses a heightmap projection for vertex offset. Creted using Amplify Shader Editor.</p>",
            `<img src="images/uv-projection-shader-01.gif" class="gif"/>`
        ]
    },
    "blender-to-unity":
    {
        "header" : "blender-to-unity.jpg",
        "title" : "Blender to Unity",
        "sidebar" : "Download:",
        "links" : [ 
            {
                "store":"Github",
                "url" : "https://github.com/nomand/BlenderToUnity"
            }
        ],
        "description" : 
        [
            "<p>This blender addon applies axis compensation to nested meshes and hierarchies for export to Unity, resulting in clean gameobject transform.rotation properties.</p>"
        ]
    }
};