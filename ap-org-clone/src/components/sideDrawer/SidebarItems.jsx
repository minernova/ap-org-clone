import { Sidebar } from 'flowbite-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SidebarItems() {
    const {t}=useTranslation();
  return (
    <>
        <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/">{t("gita_samagam")}</Sidebar.Item>
                    <Sidebar.Item href="/e-commerce/products">
                      {t("vedanta_basics_to_classics")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list">{t("books")}</Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-in">
                      {t("articles")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("ap_circle")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("for_a_talk")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("for_an_interview")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("media_public_interaction")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("contact_us")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("career")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("donate")}
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>

                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_video_series")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_ebooks")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("recorded_sessions")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_cart")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_donations")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_orders")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("scholarship_requests")}
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item className="text-lg font-semibold m-0 p-0">
                      {t("learn_more")}
                    </Sidebar.Item>

                    <Sidebar.Item href="/authentication/sign-up">
                      {t("PAF")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("ghar_ghar_upanishad")}
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item className="text-lg font-semibold m-0 p-0">
                      {t("explore_categories")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("vedant_upanishads")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("vedant_bhagavad_gita")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("other_scriptures")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("saints_masters")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("other_streams")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("life_questions")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("technical_support")}
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
    </>
  )
}
        