'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';

const SignIn = () => {
  const hasMounted = useMounted();
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6 text-center">
            <div className="mb-4">
              {/* <Link href="/"><Image src="/images/brand/logo/logo-primary.svg" className="mb-2" alt="" /></Link> */}
              <p className='my-4 h2 text-primary'>PDAS</p>
              <p className="mb-1">Population Data Access System</p>
              <p className="mb-6 h4 text-primary">ระบบการเข้าถึงข้อมูลประชากร</p>
            </div>
            {/* Form */}
            {hasMounted &&
              <div className="d-grid">
                <Link href="https://web-app.bora.dopa.go.th/thaid/auth?state=thaid" className="btn btn-outline-primary" type="submit">
                  <Image src="/images/thaid/logo_thaid.png" className="mb-2" alt="" width="42"/>
                  &nbsp;&nbsp;&nbsp;
                  เข้าสู่ระบบด้วย ThaID 
                </Link>
              </div>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn