import React from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';

const SimplePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            end={{ opacity: 0 }}
        >
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center p-4">
                    <header className="text-4xl font-bold mb-8 text-amber-500">
                    DOCTRINAL STATEMENT
                    </header>

                    <div className="max-w-2xl text-lg text-gray-700">
                        <p className="mb-4">
                            1. We believe that the sixty-six books of the Old and New 
Testaments are verbally inspired of God and inerrant in the 
original writing, and infallible, and that they are the supreme 
and final authority in faith and life.
                        </p>
                        <p className="mb-4">
                            2.  We believe in one God, eternally existing in three persons: 
                            Father, Son, and the Holy Spirit
                            </p>
                        <p className="mb-4">
                            3. We believe in Jesus Christ, the eternal Son of God, was 
conceived by the Holy Spirit, was born of Mary, a virgin, and 
is true God and true man, was crucified and died for our sins 
and bodily rose again on the third day.
</p>
                        <p className="mb-4">4. We believe that the Holy Spirit is the agent of the New birth 
and that every believer is sealed, indwelt, and baptized into 
the body of Christ with the Spirit at the moment of salvation.

                           </p>

                           <p className="mb-4">5. We believe in Salvation by God’s sovereign elective grace 
through faith in the Lord Jesus Christ, and not by works. We 
believe all who are saved through faith are born again of the 
Holy Spirit and become the children of God </p>
                           <p className="mb-4" >6. We believe in the eternal security of the believer, that it is 
impossible for one born into the family of God to be lost 
because he/she is forever kept by the power of God</p>
                           <p className="mb-4">7.  We believe in that blessed hope the personal, pre-millennial, 
                           imminent return of our Lord and Savior Jesus Christ. </p>
                           <p className="mb-4">8. We believe in the bodily resurrection of the just and the unjust, 
the everlasting blessedness of the saved, and the everlasting 
separation of the lost</p>
                           <p className="mb-4">9.  We believe that Church is the spiritual organism consisting of 
all born-again believers of this dispensation. And a local 
church is an organized body of baptized believers, immersed 
upon a credible faith in Jesus Christ and banded together for 
the purpose of worship, edification, observance of ordinances, 
and the fulfillment of the Great Commission.</p>
                           <p className="mb-4">10. We believe that the Scriptural ordinances of the Church are 
baptism and the Lord’s Supper and are to be administered by 
the Local Church to believers only upon their credible 
confession of faith.</p>
                    </div>
                </div>
            </Layout>
        </motion.div>
    );
};

export default SimplePage;