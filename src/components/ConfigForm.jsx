import React from "react";

export default function ConfigForm() {

    let borderSelect = "border border-[#C2C2C2] rounded outline-none pl-4 py-2";

  return (
    <>
      <div className="main flex flex-col gap-16 p-10 ">
        <div>
          <div className="font-semibold text-[32px] text-[#1062AA]"><h2>General</h2></div>

          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col">
              <label htmlFor="encodingSchemes">Encoding Schemes</label>
              <select className={borderSelect} name="encodingSchemes" id="encodingSchemes">
                <option value="96">sgtin-96</option>
                <option value="128">gtin-128</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="encodingSchemes">Encoding Schemes</label>
              <select className={borderSelect} name="encodingSchemes" id="encodingSchemes">
                <option value="96">sgtin-96</option>
                <option value="128">gtin-128</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="encodingSchemes">Encoding Schemes</label>
              <select className={borderSelect} name="encodingSchemes" id="encodingSchemes">
                <option value="96">sgtin-96</option>
                <option value="128">gtin-128</option>
              </select>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <div className="">Product Identification</div>

          <div className="grid grid-cols-2 gap-12">
            
            <div className="flex flex-col">
              <label htmlFor="encodingSchemes">Encoding Schemes</label>
              <select className={borderSelect} name="encodingSchemes" id="encodingSchemes">
                <option value="96">sgtin-96</option>
                <option value="128">gtin-128</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="schemes">Schemes<span class="required" title="Required">*</span></label>
                <input className={borderSelect} type="text" name="schemes" />
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="schemes">Schemes<span class="required" title="Required">*</span></label>
                <button className="w-[208px] h-[52px] border-2 border-[#008B8B] bg-[#008B8B] text-white font-medium text-[20px] rounded-[50px]">Save and Start</button>
                <button className="w-[208px] h-[52px] border-2 border-[#DB1F22] font-medium text-[20px] text-[#DB1F22] rounded-[50px]">Cancel</button>
            </div>


            {/* <div className="flex flex-col">
            <label htmlFor="encodingSchemes">Encoding Schemes</label>
            <select name="encodingSchemes" id="encodingSchemes">
              <option value="96">sgtin-96</option>
              <option value="128">gtin-128</option>
            </select>
          </div> */}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
