import Link from "next/link";
import React from "react";
import { DiscordLogo, TwitterLogo, GithubLogo, GameLogo } from "components"

export const Footer: React.FC = ({ }) => {
    return (
        <div>
            <div className="fixed bottom-0 left-0 right-0 bg-base-200 p-2 lg:p-1 flex justify-between">
            <a href="https://11pxl.com" target="_blank"><img src="./11pxl.png" className="w-20 ml-2 mb-1" /></a>
                <h1 className="font-trash mr-3 mt-1 text-sm uppercase">rarity</h1>
                <div className="flex gap-5 mr-3 mt-1">
                      <a href="https://discord.gg/PRaDjQA9AZ" target="_blank"><DiscordLogo /></a>
                      <a href="https://twitter.com/11pxl" target="_blank"><TwitterLogo /></a>
                      <a href="https://github.com/0xsol1id" target="_blank"><GithubLogo /></a>
                      <a href="http://mintgame.11pxl.com/" target="_blank"><img src="./game.png" className="w-10" /></a>
                </div>
            </div>
        </div>
    )
}