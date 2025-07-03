import React from 'react'

function Impact() {
  return (
    <div>
        <section style={{ background: '#f5f7fa', padding: '2rem 0' }} className="wow fadeInUp" data-wow-delay="0.1s">
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
                <h1 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '1.5rem' }}>
                    Our Social Impact
                </h1>
                <p style={{ color: '#333', textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.15rem' }}>
                    At Taraji Masomo, we are committed to making a positive difference in our community. Here are some of the ways we are impacting society:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                    {/* Education Outreach */}
                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        boxShadow: '0 2px 12px rgba(26,35,126,0.08)',
                        padding: '1.5rem',
                        maxWidth: 280,
                        flex: '1 1 260px',
                        textAlign: 'center'
                    }}>
                        <img
                            src="/img/education_outreach.jpeg"
                            alt="Education Outreach"
                            style={{ width: '100%', borderRadius: 8, marginBottom: '1rem', objectFit: 'cover', height: 140 }}
                        />
                        <h3 style={{ color: '#3949ab', marginBottom: '0.5rem' }}>Education Outreach</h3>
                        <p style={{ color: '#555', fontSize: '0.98rem' }}>
                            Providing learning resources and mentorship to underprivileged children in our region.
                        </p>
                    </div>
                    {/* Community Empowerment */}
                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        boxShadow: '0 2px 12px rgba(26,35,126,0.08)',
                        padding: '1.5rem',
                        maxWidth: 280,
                        flex: '1 1 260px',
                        textAlign: 'center'
                    }}>
                        <img
                            src="/img/community_empowerment.jpeg"
                            alt="Community Empowerment"
                            style={{ width: '100%', borderRadius: 8, marginBottom: '1rem', objectFit: 'cover', height: 140 }}
                        />
                        <h3 style={{ color: '#3949ab', marginBottom: '0.5rem' }}>Community Empowerment</h3>
                        <p style={{ color: '#555', fontSize: '0.98rem' }}>
                            Supporting local initiatives and skill-building workshops to empower youth and women.
                        </p>
                    </div>
                    {/* Environmental Initiatives */}
                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        boxShadow: '0 2px 12px rgba(26,35,126,0.08)',
                        padding: '1.5rem',
                        maxWidth: 280,
                        flex: '1 1 260px',
                        textAlign: 'center'
                    }}>
                        <img
                            src="/img/environmental_initiative.jpeg"
                            alt="Environmental Initiatives"
                            style={{ width: '100%', borderRadius: 8, marginBottom: '1rem', objectFit: 'cover', height: 140 }}
                        />
                        <h3 style={{ color: '#3949ab', marginBottom: '0.5rem' }}>Environmental Initiatives</h3>
                        <p style={{ color: '#555', fontSize: '0.98rem' }}>
                            Organizing tree planting drives and environmental awareness campaigns for a greener future.
                        </p>
                    </div>
                </div>
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    {/* <h2 style={{ color: '#1a237e', marginBottom: '1rem' }}>Partner With Us</h2> */}
                    {/* <p style={{ color: '#444', marginBottom: '1.5rem' }}>
                        Have you been impacted by our programs? Share your experience and photos with us!
                    </p> */}
                    {/* <button style={{
                        background: '#3949ab',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 6,
                        padding: '0.75rem 2rem',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        boxShadow: '0 1px 6px rgba(26,35,126,0.10)'
                    }}>
                        Attach Image
                    </button> */}
                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        boxShadow: '0 2px 12px rgba(26,35,126,0.08)',
                        padding: '1.5rem',
                        width: "100%",
                        flex: '1 1 260px',
                        textAlign: 'center'
                    }}>
                        {/* <img
                            src="/img/education_outreach.jpeg"
                            alt="Education Outreach"
                            style={{ width: '100%', borderRadius: 8, marginBottom: '1rem', objectFit: 'cover', height: 140 }}
                        />
                        <h3 style={{ color: '#3949ab', marginBottom: '0.5rem' }}>Education Outreach</h3>
                        <p style={{ color: '#555', fontSize: '0.98rem' }}>
                            Providing learning resources and mentorship to underprivileged children in our region.
                        </p> */}

                        <h1 style={{
                textAlign: 'center',
                color: '#1a237e',
                marginBottom: '18px',
                letterSpacing: '1px'
            }}>
                Support Our Mission
            </h1>
            <p style={{
                color: '#444',
                fontSize: '1.08rem',
                marginBottom: '24px',
                textAlign: 'center'
            }}>
                Join us in making a difference! Your donations helps us continue our mission.<br />
                If you are a philanthropist or organization willing to support us, please use one of the payment methods below.
            </p>

            <div style={{
                background: '#f5f7fa',
                borderRadius: '12px',
                boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.08)',
                padding: '20px 18px',
                marginBottom: '24px'
            }}>
                <h2 style={{
                    color: '#283593',
                    fontSize: '1.2rem',
                    marginBottom: '14px',
                    textAlign: 'center'
                }}>
                    Payment Methods
                </h2>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    <li style={{
                        marginBottom: '18px',
                        padding: '10px 0',
                        borderBottom: '1px solid #e0e0e0'
                    }}>
                        <strong>Bank Transfer:</strong><br />
                        <span style={{ color: '#555' }}>
                            Account Name: Taraji Masomo Initiative<br />
                            Bank: Example Bank<br />
                            Account Number: 1234567890<br />
                            Branch: Nairobi
                        </span>
                    </li>
                    <li style={{
                        marginBottom: '18px',
                        padding: '10px 0',
                        borderBottom: '1px solid #e0e0e0'
                    }}>
                        <strong>Mobile Money (M-Pesa):</strong><br />
                        <span style={{ color: '#555' }}>
                            Paybill: 123456<br />
                            Account: Your Name
                        </span>
                    </li>
                    <li style={{
                        padding: '10px 0'
                    }}>
                        <strong>PayPal:</strong><br />
                        <a
                            href="https://www.paypal.com/paypalme/tarajimasomo"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#1976d2',
                                textDecoration: 'none',
                                fontWeight: 'bold'
                            }}
                        >
                            paypal.me/tarajimasomo
                        </a>
                    </li>
                </ul>
            </div>

            <p style={{
                textAlign: 'center',
                color: '#333',
                fontSize: '1rem'
            }}>
                For inquiries or to request a receipt, please contact us at <a href="mailto:info@tarajimasomo.org" style={{ color: '#1976d2', textDecoration: 'underline' }}>info@tarajimasomo.org</a>.
            </p>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Impact