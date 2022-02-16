e="draw">
        <xsl:param name="nodename1"/>
        <xsl:choose>
            <xsl:when test="substring-after($nodename1,':') = 'a'">
                <xsl:for-each select="child::*">
                    <xsl:call-template name="draw">
                        <xsl:with-param name="nodename">
                            <xsl:value-of select="name()"/>
                        </xsl:with-param>
                    </xsl:call-template>
                </xsl:for-each>
            </xsl:when>
            <xsl:when test="substring-after($nodename1,':') = 'g'">
                <xsl:call-template name="draw:g"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="creategraphicstyles"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="draw:g">
        <xsl:variable name="picnumber1">
            <xsl:value-of select="count(preceding::draw:g)"/>
        </xsl:variable>
        <图:图形 uof:locID="g0000" uof:attrList="层次 标识符 组合列表 其他对象">
            <xsl:attribute name="图:标识符"><xsl:value-of select="concat(@draw:style-name,'_',$picnumber1)"/></xsl:attribute