import Link from "next/link";
import React, { FC, useState, useEffect } from "react";

import { Footer } from "views/footer";

import SolJunk from './soljunks.json'
import SMB from './smb.json'
import Faces from './faces.json'
import Rektiez from './rektiez.json'
import Harrddys from './harrddyjunks.json'
import Deads from './111deads.json'
const junks: any = SolJunk
const smb: any = SMB
const faces: any = Faces
const rektiez: any = Rektiez
const harrddys: any = Harrddys
const deads: any = Deads

export const RarityView: FC = ({ }) => {
  const [collection, setCollection] = useState(junks)
  const handleChangeCollection = (val: any, rank: boolean) => {
    setCollection(val)
    setPostNumber(50)
    setNftList(collection[0].nfts.slice(0, postNumber))
  }

  var postsPerPage = 20;
  const [postNumber, setPostNumber] = useState(50);
  const handleScroll = (e: any) => {
    var isAtBottom = e.target.scrollHeight - e.target.scrollTop <= (e.target.clientHeight + 5)
    //console.log(isAtBottom + "_" + e.target.clientHeight + "-" + (e.target.scrollHeight - e.target.scrollTop))
    if (isAtBottom && postNumber < (collection[0].nfts.length + 1)) {
      // Load next posts   
      setPostNumber(postNumber + postsPerPage)
      setNftList(collection[0].nfts.slice(0, postNumber))
    }
  }

  const [nftList, setNftList] = useState(collection[0].nfts.slice(0, postNumber))
  const [value, setValue] = useState("")

  return (
    <div className="font-pixel">
      <div className="">
        <div className="mb-1 navbar text-neutral-content rounded lg:flex justify-between bg-base-200 hidden">
          <div>
            <button className="">
              <a href="https://degenbags.11pxl.com/mint" target="_blank"><img src="./Button_mint_1.png" className="h-16" /></a>
            </button>
          </div>
          <div className="flex gap-2">
            <button className={` ${collection == junks ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(junks, true), setPostNumber(50); setNftList(junks[0].nfts.slice(0, postNumber)) }}>SolJunks Gen1</button>
            <button className={` ${collection == faces ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(faces, true), setPostNumber(50); setNftList(faces[0].nfts.slice(0, postNumber)) }}>Faces of $mb</button>
            <button className={` ${collection == smb ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(smb, true), setPostNumber(50); setNftList(smb[0].nfts.slice(0, postNumber)) }}>$MB</button>
            <button className={` ${collection == rektiez ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(rektiez, true), setPostNumber(50); setNftList(rektiez[0].nfts.slice(0, postNumber)) }}>Lil Rektiez</button>
            <button className={` ${collection == harrddys ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(harrddys, true), setPostNumber(50); setNftList(harrddys[0].nfts.slice(0, postNumber)) }}>Harrddy Junks</button>
            <button className={` ${collection == deads ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(deads, true), setPostNumber(50); setNftList(deads[0].nfts.slice(0, postNumber)) }}>111Deads</button>
          </div>
          <div className="mx-2">
            <input
              type="text"
              placeholder="Filter by name"
              className="font-pixel w-44 input input-bordered mr-2 ml-2 bg-base-200 text-center"
              value={value}
              onChange={(e) => { setValue(e.target.value) }}
            />
          </div>
        </div>
        <div className="mb-1 text-neutral-content rounded flex lg:hidden justify-between items-center p-2 bg-base-200">
          <div>
            <button className="">
              <a href="https://degenbags.11pxl.com/mint" target="_blank"><img src="./Button_mint_1.png" className="h-16" /></a>
            </button>
          </div>
          <div className="dropdown mx-1 dropdown-hover ">
            <div tabIndex={0} className="m-1 btn">Collection</div>
            <ul tabIndex={0} className="p-2 text-md shadow menu dropdown-content bg-base-300 rounded w-40 border border-gray-500">
              <button className={` ${collection == junks ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(junks, true), setPostNumber(50); setNftList(junks[0].nfts.slice(0, postNumber)) }}>SolJunks Gen1</button>
              <button className={` ${collection == faces ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(faces, true), setPostNumber(50); setNftList(faces[0].nfts.slice(0, postNumber)) }}>Faces of $mb</button>
              <button className={` ${collection == smb ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(smb, true), setPostNumber(50); setNftList(smb[0].nfts.slice(0, postNumber)) }}>$MB</button>
              <button className={` ${collection == rektiez ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(rektiez, true), setPostNumber(50); setNftList(rektiez[0].nfts.slice(0, postNumber)) }}>Lil Rektiez</button>
              <button className={` ${collection == harrddys ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(harrddys, true), setPostNumber(50); setNftList(harrddys[0].nfts.slice(0, postNumber)) }}>Harrddy Junks</button>
              <button className={` ${collection == deads ? "bg-primary" : "bg-base-300"} btn`} onClick={() => { handleChangeCollection(deads, true), setPostNumber(50); setNftList(deads[0].nfts.slice(0, postNumber)) }}>111Deads</button>
            </ul>
          </div>
          <div className="mx-2">
            <input
              type="text"
              placeholder="NFT Name"
              className="font-pixel w-32 input input-bordered mr-2 ml-2 bg-base-200 text-center"
              value={value}
              onChange={(e) => { setValue(e.target.value) }}
            />
          </div>
        </div>        
        <div className="overflow-auto h-[76vh] lg:h-[85vh] scrollbar font-pixel p-2" onScroll={handleScroll}>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-2 items-start max-h-[52rem]">
            {value == "" ?
              (nftList.map((nft: any, index: any) => (
                (nft.Name.includes(value) ? (
                  <NftCard key={index} index={index} nft={nft} />
                ) : (null)
                )
              ))) : (
                (collection[0].nfts.map((nft: any, index: any) => (
                  (nft.Name.includes(value) ? (
                    <NftCard key={index} index={index} nft={nft} />
                  ) : (null)
                  )
                ))))
            }
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

type NftCardProps = {
  index: number;
  nft: any;
};

const copyAddress = async (val: any) => {
  await navigator.clipboard.writeText(val);
}

const NftCard = ({ index, nft }: NftCardProps) => {
  return (
    <div>
      <label key={index} htmlFor={nft.Name} className="btn btn-ghost modal-button text-white bg-base-200 p-2 h h-full">
        <div className="mb-2 text-right">👑{nft.Rank}</div>
        <img src={nft.Image} alt="" />
        <div className="mt-2">{nft.Name}</div>
      </label>
      <input type="checkbox" id={nft.Name} className="modal-toggle" />
      <div className="modal">
        <div className="bg-base-200 border-2 rounded-lg p-5 w-[60rem]">
          <div className="flex justify-between">
            <div>{nft.Name}</div>
            <label htmlFor={nft.Name} className="btn">X</label>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img src={nft.Image} alt="" />
            <div className="bg-gray-700 rounded mt-3 p-2">
              <div className="flex justify-between">
                <p>Mint:</p>
                <div>
                  <button className="hover:text-red-300 uppercase" onClick={(e: any) => copyAddress(nft.MintHash)}>
                    {(nft.MintHash).slice(0, 5) + "..." + (nft.MintHash).slice(-5)}
                  </button>
                  <a href={`https://solscan.io/address/${nft.MintHash}`} target="_blank"><img src="./solscan_logo.png" alt="tmp" className="h-6 ml-2 hover:border-2 rounded-full" /></a>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Rarity Rank:</p>
                <p>{nft.Rank}</p>
              </div>
              <div className="flex justify-between">
                <p>Rarity Score:</p>
                <p>{nft.Score.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}