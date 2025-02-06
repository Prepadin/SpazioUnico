'use client'


import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Image as ImageIcon, Sliders, X } from 'lucide-react'
import Image from "next/image"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // Replace with your actual library

interface RoomDescription {
  image: string
  description: string
}


export default function ImagePage() {
  const [loadingnow, updateLoadingStatus] = useState(false); // Renamed setLoading to updateLoadingStatus
  const [progress, setProgress] = useState(0);

  // const handleClick = () => {
  //   updateLoadingStatus(true); // Use the new name here
  //   setProgress(0);

  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         clearInterval(interval);
  //         updateLoadingStatus(false); // Use the new name here
  //         return 100;
  //       }
  //       return prevProgress + 100 / 25; // Increment progress every second
  //     });
  //   }, 1000); // Update every second
  // };

  const handleClick = async () => {
    updateLoadingStatus(true);
    setProgress(0);
  
    // Step 1: Check if API limit is reached after starting progress
    const response = await axios.post('/api/design');
    
    if (response.status === 429) {
      alert("API limit reached. Upgrade your subscription to continue.");
      setProgress(0); // Reset progress since animation won't start
      updateLoadingStatus(false);
      return;
    }
  
    // Step 2: Start progress animation if API limit is not reached
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          updateLoadingStatus(false);
          return 100;
        }
        return prevProgress + 100 / 20; // Increment progress every second
      });
    }, 1000);
  };
  
  const [file, setFile] = useState<File | null>(null)
  const [prompt, setPrompt] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  
  const [preview, setPreview] = useState<string | null>(null)

  const rooms: RoomDescription[] = [
    // {
    //   image: "/bed.jpg?height=50&width=50",
    //   description: "Una camera da letto Art Déco elegantemente arredata con un letto king size con biancheria geometrica, una sontuosa poltrona in velluto e un comodino a specchio che riflette l'opulenza della stanza. Le opere d'arte ispirate all'Art Déco aggiungono un tocco di glamour"
    // },
    {
      image: "/living2.jpg?height=200&width=300",
      description: "Un vivace soggiorno a tema tropicale, completo di comodi mobili in rattan, grandi piante frondose per portare l'aria aperta, cuscini luminosi per aggiungere colore e persiane in bambù per controllare la luce naturale"
    },
    {
      image: "/livingg.jpg?height=200&width=300",
      description: "Abbracciando un'estetica moderna della metà del secolo, l'elegante soggiorno presenta un antico tavolino in teak al centro, completato da una classica meridiana sul muro e un accogliente tappeto sotto i piedi per creare un'atmosfera calda e invitante."
    },
    {
      image: "/bedroom_2.jpg?height=50&width=100",
      description: "Una camera da letto che emana il fascino country francese con un morbido letto imbottito, pareti decorate con carta da parati floreale e un armadio vintage in legno. Il lampadario di cristallo proietta una luce calda e invitante sulla stanza"
    },
    {
      image: "/din.jpg?height=200&width=300",
      description: "Un'accogliente sala da pranzo che cattura l'essenza del fascino rustico con al centro un solido tavolo da fattoria in legno, circondato da un eclettico mix di sedie non corrispondenti. Un mobile antico funge da pezzo d'effetto e l'atmosfera è caldamente illuminata da una fila di stravaganti lampadine Edison appese al soffitto"
    },
    {
      image: "/dinning.jpg?height=200&width=300",
      description: "Una sala da pranzo che incarna l'eleganza moderna, ancorata a un tavolo da pranzo elegante e minimalista abbinato a eleganti sedie contemporanee. Le lampade artistiche creano un punto focale al piano superiore, mentre l'arredamento minimalista circostante assicura che lo spazio sembri aperto, arioso e completamente moderno."
    },
    {
      image: "/imga1.jpg?height=200&width=300",
      description: "Un'affascinante camera da letto principale Hollywood Regency che vanta una lussuosa testiera, mobili a specchio che riflettono l'eleganza, tessuti sontuosi in trame ricche e opulenti accenti dorati per un tocco di opulenza"
    },
   
  ]



  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    }
  };

 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    setFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

 

  const removeImage = () => {
    setSelectedImage(null); // Clear the selected image from state
  };

  // Token for authentication (replace with actual token or fetch it securely)
  const AUTH_TOKEN = "EJNVCNK42QFNIQALCMNOLENFLQ3JNQLJ";  // Replace with the actual token

  // Function to translate the prompt
  async function translatePrompt(inputText: string): Promise<string> {
    if (!inputText) return '';

    const res = await fetch('/api/translate', {
      method: 'POST',
      body: JSON.stringify({
        q: inputText,
        source: 'it',  // Assuming Slovenian prompt needs to be translated to English
        target: 'en',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    return data.translatedText;  // Assuming your API returns the translated text here
  }

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   if (!prompt || !selectedImage) {
  //     alert("Please provide both prompt and image");
  //     return;
  //   }

  //   try {
  //     // Step 1: Translate the prompt
  //     const translatedPrompt = await translatePrompt(prompt);
  //     console.log("Translated Prompt:", translatedPrompt);

  //     // Step 2: Call API route to check API limit and subscription
  //     const response = await axios.post('/api/design');
  //     if (response.status !== 200) {
  //       alert(response.data.error || "Failed to verify checks");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("prompt", translatedPrompt);  // Use translated prompt here
  //     formData.append("image", selectedImage);  // Pass the actual file, not the URL

  //     // Step 3: Generate the image with the translated prompt
  //     setLoading(true);
  //     const imageResponse = await axios.post(
  //       `https://4140-46-122-68-255.ngrok-free.app/generate_design/?prompt=${translatedPrompt}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           "Authorization": `Bearer ${AUTH_TOKEN}`,  // Add the token to the Authorization header
  //         },
  //         responseType: "blob",  // We expect a blob image response
  //       }
  //     );

  //     // Create a temporary URL for the generated image
  //     const imageUrl = URL.createObjectURL(imageResponse.data);
  //     setGeneratedImage(imageUrl);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error generating design:", error);
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    updateLoadingStatus(true); // Start loading animation
    setProgress(0); // Reset progress
  
    let interval: NodeJS.Timeout | null = null; // Declare interval variable
  
    if (!prompt || !selectedImage) {
      alert("Please provide both prompt and image");
      setLoading(false);
      updateLoadingStatus(false); // Stop loading animation
      return;
    }
  
    try {
      // Step 1: Translate the prompt
      const translatedPrompt = await translatePrompt(prompt);
      console.log("Translated Prompt:", translatedPrompt);
  
      // Step 2: Call API route to check API limit and subscription
      const response = await axios.post('/api/design');
  
      if (response.status !== 200) {
        if (response.status === 429) {
          // API limit reached, redirect to settings page
          window.location.href = "http://localhost:3000/settings";
        } else {
          alert(response.data.error || "Failed to verify checks");
        }
        setLoading(false);
        updateLoadingStatus(false); // Stop loading animation
        return;
      }
  
      // Step 3: Start progress animation
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval!); // Clear interval when progress reaches 100%
            updateLoadingStatus(false); // Stop loading animation
            return 100;
          }
          return prevProgress + 100 / 35; // Increment progress every second
        });
      }, 1000);
  
      // Step 4: Generate the image with the translated prompt
      const formData = new FormData();
      formData.append("prompt", translatedPrompt);
      formData.append("image", selectedImage);
  
      const imageResponse = await axios.post(
        `https://23f1-46-122-68-255.ngrok-free.app/generate_design/?prompt=${translatedPrompt}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${AUTH_TOKEN}`,
          },
          responseType: "blob",
        }
      );
  
      // Create a temporary URL for the generated image
      const imageUrl = URL.createObjectURL(imageResponse.data);
      setGeneratedImage(imageUrl);
    } catch (error: any) {
      console.error("Error generating design:", error);
  
      if (error.response?.status === 429) {
        // API limit reached, redirect to settings page
        window.location.href = "http://localhost:3000/settings";
      } else {
        alert("Porabili ste vse credite. Za nadalno uporabo nadgradite svojo naročnino.");
      }
    } finally {
      setLoading(false);
      updateLoadingStatus(false); // Ensure loading animation stops
      if (interval) clearInterval(interval); // Clear the interval if it's still running
    }
  };

  // Add this new function to handle example image selection
  const handleExampleImageSelect = async (imageUrl: string, description: string) => {
    try {
      // Handle image selection
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], 'example-room.jpg', { type: 'image/jpeg' });
      setSelectedImage(file);
      
      // Set the prompt text
      setPrompt(description);
    } catch (error) {
      console.error('Error loading example image:', error);
    }
  };

  // const handleSelectChange = (value) => {
  //   setPrompt(value); // Update the input field with the selected value
  // };
 
  const handleRoomTypeChange = (value: string) => {
    setPrompt((prev) => `${value}${prev ? `, ${prev}` : ""}`);
  };

  const handleDesignStyleChange = (value: string) => {
    setPrompt((prev) => `${prev}${prev ? `, ${value}` : value}`);
  };

return (
     <>
     
  <div className="p-5">
    <h1 className="text-3xl font-bold mb-6 ">Generatore di apparecchiature per la stanza</h1>
    {/* Room Type Selector */}
    <div className="space-y-2">
          <label className="block text-base font-medium text-gray-700 flex items-center gap-1">Tipo di camera</label>
          {/* <Select defaultValue="" onValueChange={handleRoomTypeChange}>
            <SelectTrigger className="w-full bg-[#0D0B14] border-0 text-white">
              <SelectValue placeholder="Select room type" />  */}
               <Select
    defaultValue=""
    onValueChange={(value) => setPrompt((prev) => `${value}, ${prev.split(',').slice(1).join(',')}`.trim())}
  >
     <SelectTrigger className="w-full bg-[#0D0B14] border-0 text-white">
              <SelectValue placeholder="Scegli una tipologia di camera" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Soggiorno">Soggiorno</SelectItem>
              <SelectItem value="Camera da letto">Camera da letto</SelectItem>
              <SelectItem value="La cucina">La cucina</SelectItem>
              <SelectItem value="Sala da pranzo">Sala da pranzo</SelectItem>
              <SelectItem value="Stanza dei bambini">Stanza dei bambini</SelectItem>
              <SelectItem value="L'ufficio">L&apos;ufficio</SelectItem>
              </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 mt-4">
          <label className="block text-base font-medium text-gray-700 flex items-center gap-1">Progettazione della stanza</label>
          {/* <Select defaultValue="" onValueChange={handleDesignStyleChange}> */}
          <Select
    defaultValue=""
    onValueChange={(value) =>
      setPrompt((prev) => {
        const [roomType] = prev.split(','); // Extract the room type
        return `${roomType}, ${value}`.trim(); // Combine room type with new design style
      })
    }
  >
            <SelectTrigger className="w-full bg-[#0D0B14] border-0 text-white">
              <SelectValue placeholder="Scegli un tipo di stile" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="vegetazione lussureggiante, legno naturale, mobili in rattan, motivi vivaci, morbide pareti bianche, opere d'arte a tema tropicale, luci calde, tende ariose e accenti di bambù.">
              Un rifugio tropicale
              </SelectItem>
              <SelectItem value="Blu tenui, beige sabbia, legno sbiancato, texture naturali, tessuti leggeri, decorazioni nautiche, cesti di vimini, barriere d'aria, accenti di legni e molta luce naturale.">
              Calma costiera
              </SelectItem>
              <SelectItem value="stile moderno, linee eleganti, toni neutri, forme geometriche, decorazioni domestiche minimali, monocromatico, bianco, beige, grigio, nero, legno, vetro, accenti metallici.">
              Moderno
              </SelectItem>
              <SelectItem value="pavimenti in legno chiaro, tessuti piacevoli, toni pastello tenui, mobili minimalisti, decorazioni funzionali, luce naturale, accenti verdi, pareti bianche morbide, tappeti di lana e semplici mobili in legno.">
              Serenità scandinava
              </SelectItem>
              <SelectItem value="muri di mattoni a vista, pavimenti in cemento, infissi in acciaio, scaffali aperti, grigi neutri, calde tonalità del legno, illuminazione di ispirazione vintage, mobili in pelle, accenti neri e grandi finestre.">
              Eleganza industriale
              </SelectItem>
              <SelectItem value="mobili di ispirazione retrò, gambe in legno affusolate, motivi geometrici audaci, accenti di colore vibranti, calde tonalità del legno, ampie finestre, arredamento minimalista, tessuti morbidi e illuminazione elegante.">
              Moderno di metà secolo
              </SelectItem>
              <SelectItem value="mobili eclettici, tessuti a strati, accenti macramè, tonalità della terra, luci calde, tappeti intrecciati, materiali naturali, sedute basse, cuscini fantasia e piante in vaso.">
              Energia bohémien
              </SelectItem>
              <SelectItem value="finiture lucide, illuminazione d'effetto, mobili eleganti, una tavolozza monocromatica, materiali di prima qualità, tessuti morbidi, metalli delicati, linee pulite e arte astratta.">
              Lusso moderno
              </SelectItem>
              <SelectItem value="tavolozza di colori neutri, mobili a basso profilo, legno naturale, texture morbide, linee pulite, luci calde, arredamento funzionale, tatami, ceramiche semplici e un senso di pace.">
              Minimalismo giapponese
              </SelectItem>
              <SelectItem value="mobili in legno invecchiato, pareti sovrapposte, toni neutri, tessuti morbidi, tappeti accoglienti, decorazioni vintage, scaffali aperti, luce naturale, porte di fienili e illuminazione in stile vintage.">
              Casale rustico
              </SelectItem>
              <SelectItem value="pianta aperta, soffitti alti, grandi finestre, materie prime come mattoni e cemento, mobili moderni, toni neutri, accenti di metallo nero, arredamento minimalista e opere d'arte audaci.">
              Loft urbano
              </SelectItem>
              </SelectContent>
          </Select>
        </div>
    <form onSubmit={handleSubmit} className="mb-6 grid  ">
      <div className="space-y-2 mt-4">
        <label className="block text-base font-medium text-gray-700 flex items-center gap-1 ">Testo di progettazione:</label>
       
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Descrivi le tue preferenze di progettazione"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      {/* <div>
        <p>Primer:</p>
    <p className="block text-sm font-medium text-gray-700 ">Elegantno opremljena spalnica v slogu Art Deco z veliko zakonsko posteljo in zrcalno nočno omarico, ki odraža razkošje sobe. Umetniška dela, navdihnjena z Art Deco, dodajo pridih glamurja. </p>
        
   </div> */}
     
 
    </form>
    </div>
    <div className="h-full w-full max-w-6xl mx-auto p-4 pb-20">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Card 1: Upload Image (Inside Form) */}
    <Card className="h-90 flex flex-col">
      <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
        <CardContent className="p-4 h-full flex flex-col justify-between">
          {selectedImage ? (
            <div className="relative h-full">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-full cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <Upload className="w-12 h-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Inserisci una foto della stanza</p>
              <p className="text-sm text-gray-400 mt-2">- o -</p>
              <p className="text-sm text-blue-500">Fare clic e fissare l&apos;immagine della stanza</p>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
          )}
          <button
  type="submit"
  disabled={loading}
  className={`mt-4 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
  }`}
>
  {loadingnow ? `Generazione in corso, attendere ... ${Math.round(progress)}%` : 'Generare'}
</button>
        </CardContent>
      </form>
    </Card>

    {/* Card 2: Generated Image Output */}
    <Card className="h-90 flex flex-col">
      <CardContent className="p-4 h-full flex flex-col justify-between">
        {generatedImage ? (
          <div className="h-full flex flex-col">
            <img
              src={generatedImage}
              alt="Generated Design"
              className="w-full h-full object-cover rounded-lg"
            />
            <a
              href={generatedImage}
              download="generated_image.png"
              className="mt-4 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Scarica l&apos;immagine
            </a>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg h-full flex items-center justify-center">
            <p className="text-sm text-gray-500">Immagine generata</p>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
</div>
<div className="container mx-auto p-4">
      <h1 className="text-xl  mb-6">Esempi generali:</h1>
      {/* <ScrollArea className="h-[800px] rounded-lg border p-4"> */}
        {rooms.map((room, index) => (
          <Card key={index} className="mb-4">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src={room.image}
                  alt={`Room design ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full md:w-1/6"
                />
                <div className="w-full md:w-2/3">
                  <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
                  <Button 
                    onClick={() => handleExampleImageSelect(room.image, room.description)}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Provalo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      {/* </ScrollArea> */}
    </div>
   
</>
  );
}