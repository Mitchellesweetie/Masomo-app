import React from 'react'

function Partner() {
return (
    <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0'
    }}>
        <div style={{
            background: '#fff',
            borderRadius: '18px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
            maxWidth: '480px',
            width: '100%',
            padding: '36px 32px',
            margin: '0 16px'
        }} className='wow fadeInUp' data-wow-delay="0.1s">
            <h1 style={{
                textAlign: 'center',
                color: '#1a237e',
                marginBottom: '18px',
                letterSpacing: '1px'
            }}>
                Partner With Us
            </h1>
            <p style={{
                color: '#444',
                fontSize: '1.08rem',
                marginBottom: '24px',
                textAlign: 'center'
            }}>
                Join us in making a difference! Your partnership helps us continue our mission.<br />
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
                For partnership inquiries or to request a receipt, please contact us at <a href="mailto:info@tarajimasomo.org" style={{ color: '#1976d2', textDecoration: 'underline' }}>info@tarajimasomo.org</a>.
            </p>
        </div>
    </div>
)
}

export default Partner