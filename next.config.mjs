/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        // domains:['cdn.dummyjson.com']  OR it is not the best way
        remotePatterns :[
            {
                protocol:"https",
                hostname:"cdn.dummyjson.com"
            },
            {
                protocol:"https",
                hostname:"*.google.com"
            }
        ]
    }

};
export default nextConfig;
