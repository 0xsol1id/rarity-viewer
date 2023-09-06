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
    <div className="">
      <div className="">
        <div className="mb-1 navbar text-neutral-content rounded flex justify-between bg-base-200">
          <div>
            <button className="">
              <Link href="/mint" passHref>
                <a target="_blank"><img src="./Button_mint_1.png" className="h-16" /></a>
              </Link>
            </button>
          </div>
          <div className="flex">
            <button className="btn mx-1 mb-1 bg-base-300 rounded border-base-300" onClick={() => { handleChangeCollection(junks, true), setPostNumber(50); setNftList(junks[0].nfts.slice(0, postNumber)) }}>SolJunks Gen1</button>
            <button className="btn mx-1 mb-1 bg-base-300 rounded border-base-300" onClick={() => { handleChangeCollection(faces, true), setPostNumber(50); setNftList(faces[0].nfts.slice(0, postNumber)) }}>Faces of $mb</button>
            <button className="btn mx-1 mb-1 bg-base-300 rounded border-base-300" onClick={() => { handleChangeCollection(smb, true), setPostNumber(50); setNftList(smb[0].nfts.slice(0, postNumber)) }}>$MB</button>
            <button className="btn mx-1 mb-1 bg-base-300 rounded border-base-300" onClick={() => { handleChangeCollection(rektiez, true), setPostNumber(50); setNftList(rektiez[0].nfts.slice(0, postNumber)) }}>Lil Rektiez</button>
            <button className="btn mx-1 mb-1 bg-base-300 rounded border-base-300" onClick={() => { handleChangeCollection(harrddys, true), setPostNumber(50); setNftList(harrddys[0].nfts.slice(0, postNumber)) }}>Harrddy Junks</button>
            <button className="btn mx-1 mb-1 bg-base-300 rounded border-base-300" onClick={() => { handleChangeCollection(deads, true), setPostNumber(50); setNftList(deads[0].nfts.slice(0, postNumber)) }}>111Deads</button>
          </div>
          <div className="mx-2">
            <input
              type="text"
              placeholder="Enter NFT number"
              className="font-pixel w-64 input input-bordered mr-2 ml-2 bg-base-200"
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
                  <NftCard index={index} nft={nft} />
                ) : (null)
                )
              ))) : (
                (collection[0].nfts.map((nft: any, index: any) => (
                  (nft.Name.includes(value) ? (
                    <NftCard index={index} nft={nft} />
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

const NftCard = ({ index, nft }: NftCardProps) => {
  return (
    <div key={index} className="bg-base-200 p-2">
      <img src={nft.Image} alt="" />
      <div>{nft.Name}</div>
      <div>RANK: {nft.Rank}</div>
    </div>
  )
}